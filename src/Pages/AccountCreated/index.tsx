import { Card, Typography } from "antd";
import HeaderText from "../../Components/Common/HeaderText";
import Logo from "../../Components/Common/Logo";
import { useEffect } from "react";
import { getCookie } from "../../Utils/HandleCookie";
import { LOGIN_TOKEN } from "../../Configs/Constants/Tokens";
import useUser from "../../Hooks/UseUser";
import { decodeToken } from "../../Utils/DecodeToken";
import {
  ACCOUNT_ACTIVATED,
  ACCOUNT_CREATED,
} from "../../Configs/Constants/AccountStatus";
import { getSessionData } from "../../Utils/HandleSessionStorage";
import { CREATED_USER_TOKEN } from "../../Configs/Constants/User";
import { CretedUserTokenDto } from "../../Data/UserDtos/CreatedUserTokenDto";

const AccountCreated = () => {
  const { handleGetUserById, userData } = useUser();

  const handleVerification = async () => {
    const loginToken = getCookie(LOGIN_TOKEN);
    const createdUserToken = getSessionData(CREATED_USER_TOKEN)
    if (loginToken) {
      const userId = decodeToken<{ user_id: string }>(loginToken).user_id;
      const data = await handleGetUserById(userId);
      if (data.accountStatus === ACCOUNT_ACTIVATED) {
        window.location.href = "/";
      }
    } 
    else if(createdUserToken) {
      const userId = decodeToken<CretedUserTokenDto>(createdUserToken as string).id;
      const data = await handleGetUserById(userId);
      if(data.accountStatus !== ACCOUNT_CREATED) {
        window.location.href = '/'
      }
    }
    else {
      window.location.href = "/";
    }
  };
  
  useEffect(() => {
    handleVerification();
  }, []);

  return (
    userData.accountStatus === ACCOUNT_CREATED && (
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
    )
  );
};

export default AccountCreated;
