import RegisterPrivateUserForm from "../../Components/Site/RegisterPrivateUser/RegisterPrivateUserForm";
import useUser from "../../Hooks/UseUser";
import "./index.scss";

const RegisterUser = () => {
  const { handleCreatePrivateUser, registerUserError } = useUser();
  return (
    <div className="register-user-page">
      <div className="register-user-page__overlay"></div>
      <div className="register-user-page__form">
        <RegisterPrivateUserForm handleCreatePrivateUser={handleCreatePrivateUser} registerUserError={registerUserError} />
      </div>
    </div>
  );
};

export default RegisterUser;
