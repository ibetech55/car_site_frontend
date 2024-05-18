import RegisterPrivateUserForm from "../../Components/Site/RegisterPrivateUser/RegisterPrivateUserForm";
import useLocation from "../../Hooks/UseLoaction";
import useUser from "../../Hooks/UseUser";
import "./index.scss";

const RegisterUser = () => {
  const { handleCreatePrivateUser, errorEmail, errorZipCode } = useUser();
  const {handleGetCityList} = useLocation();
  return (
    <div className="register-user-page">
      <div className="register-user-page__overlay"></div>
      <div className="register-user-page__form">
        <RegisterPrivateUserForm handleCreatePrivateUser={handleCreatePrivateUser} errorEmail={errorEmail} errorZipCode={errorZipCode} handleGetCityList={handleGetCityList} />
      </div>
    </div>
  );
};

export default RegisterUser;
