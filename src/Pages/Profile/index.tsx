import { useEffect, useState } from "react";
import DefaultButton from "../../Components/Common/DefaultButton";
import HeaderText from "../../Components/Common/HeaderText";
import ModalUpdateDealership from "../../Components/Site/Profile/ModalUpdateDealership";
import ProfileDetails from "../../Components/Site/Profile/ProfileDetails";
import UserDetails from "../../Components/Site/Profile/UserDetails";
import { WithAuth } from "../../Components/Template/WithAuth";
import { DEALERSHIP_ACCOUNT } from "../../Configs/Constants/UserTypes";
import SiteModal from "../../Components/Common/SiteModal";
import { UpdateUserDto } from "../../Data/UserDtos/UpdateUserDto";
import useUser from "../../Hooks/UseUser";


const initForm: UpdateUserDto = {
  contactName: "",
  dealershipName: "",
  phoneNumber: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
};

const ProfilePage: React.FC = () => {
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);
  const [formProfile, setFormProfile] = useState<UpdateUserDto>(initForm);
  const { handleGetUserById, loggedUser, userData } = useUser();

  useEffect(() => {
    handleGetUserById(loggedUser.id);
  }, []);

  return (
    <>
      <div className="profile-page">
        <HeaderText
          text={
            userData.userType === DEALERSHIP_ACCOUNT
              ? "Dealership Profile"
              : "User Profile"
          }
        />
        {userData.userType === DEALERSHIP_ACCOUNT ? (
          <ProfileDetails
            dealershipName={userData.dealership?.dealershipName}
            contactName={userData.dealership?.contactName}
            email={userData.email}
            phoneNumber={userData.phoneNumber}
            profileImage={userData.dealership?.dealershipLogo}
            userType={userData.userType}
          />
        ) : (
          <ProfileDetails
            firstName={userData.privateUser?.firstName}
            lastName={userData.privateUser?.lastName}
            email={userData.email}
            phoneNumber={userData.phoneNumber}
            profileImage={userData.dealership?.dealershipLogo}
            userType={userData.userType}
            dateOfBirth={userData.privateUser?.dateOfBirth}
          />
        )}
        <UserDetails
          addressData={userData.address}
          createdAt={userData.createdAt as string}
          active={userData.active}
          status={userData.accountStatus}
          type={userData.userType}
        />
        <div className="profile-page__update-buttons">
          <DefaultButton
            title="Update User"
            onClick={() => setOpenModalUpdateUser(true)}
          />
          <DefaultButton
            title="Change Password"
            onClick={() => setOpenModalUpdateUser(true)}
          />
        </div>
      </div>
      <SiteModal
        open={openModalUpdateUser}
        onCancel={() => {
          setFormProfile({
            contactName: userData.dealership?.contactName as string,
            dealershipName: userData.dealership?.dealershipName as string,
            phoneNumber: userData.phoneNumber,
            street: userData.address.street,
            state: userData.address.state,
            zipCode: userData.address.zipCode,
            city: userData.address.city,
          });
          setOpenModalUpdateUser(false);
        }}
        title="Update User"
        width={900}
      >
        {userData.userType === DEALERSHIP_ACCOUNT ? (
          <ModalUpdateDealership
            userData={userData}
            form={formProfile}
            setForm={setFormProfile}
          />
        ) : (
          <ModalUpdateDealership
            userData={userData}
            form={formProfile}
            setForm={setFormProfile}
          />
        )}
      </SiteModal>
    </>
  );
};

export const Profile = WithAuth(ProfilePage);
