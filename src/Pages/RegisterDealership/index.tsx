import RegisterDealershipForm from "../../Components/Site/RegisterDealership/RegisterDealershipForm";
import useUser from "../../Hooks/UseUser";
import "./index.scss";

const RegisterDealership = () => {
  const { handleCreateDealership, registerUserError } = useUser();
  return (
    <div className="register-dealership-page">
      <div className="register-dealership-page__overlay"></div>
      <div className="register-dealership-page__form">
        <RegisterDealershipForm handleCreateDealership={handleCreateDealership} registerUserError={registerUserError} />
      </div>
    </div>
  );
};

export default RegisterDealership;
