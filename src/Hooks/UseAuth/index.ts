/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import { authLogin, authLogout } from "../../State/Auth/AuthActions";
import { LoginFormDto } from "../../Data/AuthDtos/loginDtos";
import { clearLoginError } from "../../State/Auth/AuthSlice";
import useClearError from "../../Utils/UseClearError";
// import Cookies from "js-cookie";
import { getUserById } from "../../State/User/UserActions";
import { jwtDecode } from "jwt-decode";
import {
  ACCOUNT_ACTIVATED,
  ACCOUNT_CREATED,
} from "../../Configs/Constants/AccountStatus";
import { useNavigate } from "react-router";
const useAuth = () => {
  const authData = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (values: LoginFormDto) => {
    const d = await dispatch(authLogin(values)).unwrap();
    // const loginToken = Cookies.get("login_token");
    if (d.login_token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = jwtDecode(d.login_token) as any;

      if (data) {
        const userData = await dispatch(getUserById(data.user_id)).unwrap();
        if (userData.accountStatus === ACCOUNT_ACTIVATED) {
          navigate("/")
        } else if (userData.accountStatus === ACCOUNT_CREATED) {
          window.location.href = "/account_created"
        }
      }
    }
  };

  const handleLogout = async () => {
    await dispatch(authLogout());
  };
  useClearError({
    errorString: [authData.loginError],
    action: () => dispatch(clearLoginError()),
  });

  return {
    handleLogin,
    loginError: authData.loginError,
    handleLogout,
  };
};

export default useAuth;
