import { useState } from "react";
import UploadButton from "../../../Common/UploadButton";
import { Typography } from "antd";
import DefaultButton from "../../../Common/DefaultButton";
import { DeleteOutlined } from "@ant-design/icons";
import {
  DEALERSHIP_ACCOUNT,
  PRIVATE_USER_ACCOUNT,
} from "../../../../Configs/Constants/UserTypes";
import { formatDate } from "../../../../Utils/FormatDate";

interface IProps {
  dealershipName?: string;
  contactName?: string;
  email: string;
  phoneNumber: string;
  profileImage: string | null | undefined;
  userType?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
}

const ProfileDetails: React.FC<IProps> = ({
  firstName,
  lastName,
  dealershipName,
  contactName,
  email,
  phoneNumber,
  profileImage,
  userType,
  dateOfBirth,
}) => {
  const [image, setImage] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      if (image) {
        URL.revokeObjectURL(image);
      }
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFileName(file.name);
    }
  };

  const handleRemoveImage = () => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage("");
      setFileName("");
    }
  };

  return (
    <div className="profile-details">
      <div className="profile-details__info">
        <div className="profile-details__image">
          <div className="profile-details__image-box">
            {!image ? (
              <img
                src={
                  profileImage ? profileImage : "/assets/default-user-image.png"
                }
                alt="user-image"
              />
            ) : (
              <img src={image} alt="user-image" />
            )}
          </div>
          <div className="profile-details__upload-button">
            <UploadButton
              title="Upload Image"
              onFileChange={handleImageUpload}
              showImageName={false}
            />
            <DefaultButton
              title="Remove Image"
              danger
              outline
              icon={<DeleteOutlined />}
              onClick={() => handleRemoveImage()}
            />
          </div>
          {fileName && (
            <Typography className="profile-details__filename">
              {fileName}
            </Typography>
          )}
        </div>
        <div className="profile-details__user-data">
          {userType === DEALERSHIP_ACCOUNT && (
            <>
              <Typography className="profile-details__user-data-text">
                <span>Dealership Name: </span>
                {dealershipName}
              </Typography>
              <Typography className="profile-details__user-data-text">
                <span>Contact Name: </span>
                {contactName}
              </Typography>
            </>
          )}
          {userType === PRIVATE_USER_ACCOUNT && (
            <>
              <Typography className="profile-details__user-data-text">
                <span>Name: </span>
                {firstName} {lastName}
              </Typography>
            </>
          )}
          <Typography className="profile-details__user-data-text">
            <span>Email: </span>
            {email}
          </Typography>
          {userType === PRIVATE_USER_ACCOUNT && (
            <Typography className="profile-details__user-data-text">
              <span>Date of birth: </span>
              {formatDate(dateOfBirth as string)}
            </Typography>
          )}
          <Typography className="profile-details__user-data-text">
            <span>Phone Number: </span>
            {phoneNumber}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
