import { Card, Typography } from "antd";
import HeaderText from "../../Components/Common/HeaderText";
import Logo from "../../Components/Common/Logo";

const AccountCreated = () => {
  return (
    <div className="account-created">
      <Card className="account-created__card">
        <div className="account-created__logo">
          <Logo />
        </div>
        <HeaderText text="Account Created" />
        <Typography.Text className="account-created__text">
          Your account has been created. An access code and link has been sent
          to your e-mail to activate your account
        </Typography.Text>
      </Card>
    </div>
  );
};

export default AccountCreated;
