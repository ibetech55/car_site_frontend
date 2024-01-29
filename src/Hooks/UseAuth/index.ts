import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State";
import { authLogin } from "../../State/Auth/AuthActions";
import { LoginFormDto } from "../../Data/AuthDtos/loginDtos";
// import { useEffect } from "react";
// import { checkAuth } from "../../State/Auth/AuthSlice";

const useAuth = () => {
  const authData = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (values: LoginFormDto) => {
    await dispatch(authLogin(values));
  };

  // useEffect(()=>{
  //   dispatch(checkAuth())
  // }, [])
  return { auth: authData.auth, handleLogin };
};

export default useAuth;
