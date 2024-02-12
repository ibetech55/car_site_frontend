import { Card, Typography } from "antd";
import HeaderText from "../../Components/Common/HeaderText";
import Logo from "../../Components/Common/Logo";
import { useEffect } from "react";
import { getCookie } from "../../Utils/HandleCookie";
import { LOGIN_TOKEN } from "../../Configs/Constants/Tokens";
import useUser from "../../Hooks/UseUser";
import { decodeToken } from "../../Utils/DecodeToken";
import { ACCOUNT_CREATED } from "../../Configs/Constants/AccountStatus";

const AccountCreated = () => {
  const { handleGetUserById, userData } = useUser();
  useEffect(() => {
    const loginToken = getCookie(LOGIN_TOKEN);
    if (loginToken) {
      const userId = decodeToken<{ user_id: string }>(loginToken).user_id;
      handleGetUserById(userId);
    } else {
      window.location.href = "/";
    }
  }, []);
  
  return userData.accountStatus === ACCOUNT_CREATED && (
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
