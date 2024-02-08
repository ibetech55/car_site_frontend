/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import { authLogin } from "../../State/Auth/AuthActions";
import { LoginFormDto } from "../../Data/AuthDtos/loginDtos";
import { clearLoginError } from "../../State/Auth/AuthSlice";
import useClearError from "../../Utils/UseClearError";
import Cookies from "js-cookie";
import { getUserById } from "../../State/User/UserActions";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import {
  ACCOUNT_ACTIVATED,
  ACCOUNT_CREATED,
} from "../../Configs/Constants/AccountStatus";
const useAuth = () => {
  const authData = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = async (values: LoginFormDto) => {
    await dispatch(authLogin(values));
    const loginToken = Cookies.get("login_token");
    if (loginToken) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = jwtDecode(loginToken) as any;

      if (data) {
        const userData = await dispatch(getUserById(data.user_id)).unwrap();
        if (userData.accountStatus === ACCOUNT_ACTIVATED) {
          navigate("/");
        } else if (userData.accountStatus === ACCOUNT_CREATED) {
          navigate("/account_created");
        }
      }
    }
  };
  useClearError({
    errorString: [authData.loginError],
    action: () => dispatch(clearLoginError()),
  });

  return {
    handleLogin,
    loginError: authData.loginError,
  };
};

export default useAuth;
