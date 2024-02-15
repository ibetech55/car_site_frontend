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
import { GetLoggedUserDto } from "../../../Data/UserDtos/GetLoggedUserDto";

interface WrappedComponentProps {
  loggedUser?:GetLoggedUserDto
}

const WithAuth = (
  WrappedComponent: React.ComponentType<WrappedComponentProps>
) => {
  const WithAuthentication: React.FC = () => {
    const navigate = useNavigate();
    const { handleGetLoggedUser, loggedUser } = useUser();
    useEffect(() => {
      try {
        const loginToken = getCookie(LOGIN_TOKEN);
        if (loginToken) {
          const data = decodeToken<{ user_id: string }>(loginToken);
          if (data && data.user_id) {
            handleGetLoggedUser(data.user_id);
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

    if (loggedUser.accountStatus === ACCOUNT_ACTIVATED && loggedUser.active) {
      return <WrappedComponent />;
    } else if (loggedUser.accountStatus === ACCOUNT_CREATED && !loggedUser.active) {
      return <Navigate to="/account_created" />;
    }
  };

  return WithAuthentication;
};

export { WithAuth };
