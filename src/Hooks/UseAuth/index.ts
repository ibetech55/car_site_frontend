import { useDispatch } from "react-redux";
import { AppDispatch } from "../../State";
import { authLogin } from "../../State/Auth/AuthActions";
import { LoginFormDto } from "../../Data/AuthDtos/loginDtos";

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (values: LoginFormDto) => {
    await dispatch(authLogin(values));
  };

  return { handleLogin };
};

export default useAuth;
