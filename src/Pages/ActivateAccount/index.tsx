/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "antd";
import ActivateAccountForm from "../../Components/Site/ActivateAccount/ActivateAccountForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../../Hooks/UseUser";
import { ACCOUNT_CREATED } from "../../Configs/Constants/AccountStatus";

const ActivateAccount = () => {
  const { account_token } = useParams();
  const {
    handleGetByAccessCodeToken,
    accessCodeTokenResponse,
    confirmAccessCodeError,
    handleConfirmAccessCode,
  } = useUser();

  useEffect(() => {
    if (account_token) {
      handleGetByAccessCodeToken(account_token);
    } else {
      window.location.href = "/";
    }
  }, []);
  return (
    accessCodeTokenResponse.accountStatus === ACCOUNT_CREATED && (
      <>
        <div className="activate-account-page">
          <Typography className="activate-account-page__text">
            Account created please, access your email to and type or access code
            to activate your account
          </Typography>
          <section>
            <ActivateAccountForm
              accessCodeToken={account_token as string}
              confirmAccessCodeError={confirmAccessCodeError}
              handleConfirmAccessCode={handleConfirmAccessCode}
            />
          </section>
        </div>
      </>
    )
  );
};

export default ActivateAccount;
