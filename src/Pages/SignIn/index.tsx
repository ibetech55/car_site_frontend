import { SignInForm } from "../../Components/Site/SignIn/SignInForm"
import useAuth from "../../Hooks/UseAuth"

const SignIn = () => {
  const {handleLogin} = useAuth();
  return (
    <div>
      <SignInForm handleLogin={handleLogin} />
    </div>
  )
}

export default SignIn
