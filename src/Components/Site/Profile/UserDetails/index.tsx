import { Row } from "antd";
import { DEALERSHIP_ACCOUNT } from "../../../../Configs/Constants/UserTypes";
import { GetAddressDto } from "../../../../Data/UserDtos/GetUserDto";
import { formatDate } from "../../../../Utils/FormatDate";
import ProfileItem from "../ProfileItem";
import { ACCOUNT_ACTIVATED } from "../../../../Configs/Constants/AccountStatus";

interface IProps {
  addressData: GetAddressDto;
  createdAt: string;
  active: boolean;
  status: string;
  type: string;
}

const UserDetails: React.FC<IProps> = ({
  addressData,
  createdAt,
  active,
  status,
  type,
}) => {
  return (
    <div className="user-details">
      <Row gutter={[8, 8]} className="user-details__gutter">
        <ProfileItem title="Street Address" text={addressData.street} />
        <ProfileItem title="City" text={addressData.city} />
        <ProfileItem title="State" text={addressData.state} />
        <ProfileItem title="Zip Code" text={addressData.zipCode} />
      </Row>

      <Row gutter={[8, 8]}>
        <ProfileItem
          title="Profile Type"
          text={type === DEALERSHIP_ACCOUNT ? "Dealership" : "Private User"}
        />
        <ProfileItem title="Profile Created" text={formatDate(createdAt)} />
        <ProfileItem title="Profile Status" text={status === ACCOUNT_ACTIVATED ? 'Activated' : 'Inacive'} />
        <ProfileItem title="Active" text={active ? "Active" : "Inactive"} />
      </Row>
    </div>
  );
};

export default UserDetails;
