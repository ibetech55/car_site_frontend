/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { LOGIN_TOKEN } from "../../../Configs/Constants/Tokens";
import useUser from "../../../Hooks/UseUser"; // Assuming `useUser` is a custom hook
import { decodeToken } from "../../../Utils/DecodeToken";
import { getCookie, removeCookie } from "../../../Utils/HandleCookie";
import {
  ACCOUNT_ACTIVATED,
  ACCOUNT_CREATED,
} from "../../../Configs/Constants/AccountStatus";

interface WrappedComponentProps {}

const WithAuth = <P extends WrappedComponentProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAuthentication: React.FC<P> = (props) => {
    const navigate = useNavigate();
    const { handleGetUserById, userData } = useUser();
    useEffect(() => {
      try {
        const loginToken = getCookie(LOGIN_TOKEN);
        if (loginToken) {
          const data = decodeToken<{ user_id: string }>(loginToken);
          if (data && data.user_id) {
            handleGetUserById(data.user_id);
          } else {
            removeCookie(LOGIN_TOKEN);
            navigate("/");
          }
        } else {
          navigate("/");
        }
      } catch (error) {
        removeCookie(LOGIN_TOKEN);
        window.location.href = "/"
      }
    }, []);

    if (userData.accountStatus === ACCOUNT_ACTIVATED && userData.active) {
      return <WrappedComponent {...(props as P)} />;
    } else if (userData.accountStatus === ACCOUNT_CREATED && !userData.active) {
      return <Navigate to="/account_created" />;
    }
  };

  return WithAuthentication;
};

export { WithAuth };
