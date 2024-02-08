import { SignInForm } from "../../Components/Site/SignIn/SignInForm";
import useAuth from "../../Hooks/UseAuth";

const SignIn = () => {
  const { handleLogin, loginError } = useAuth();
  return (
    <div>
      <SignInForm handleLogin={handleLogin} loginError={loginError} />
    </div>
  );
};

export default SignIn;
