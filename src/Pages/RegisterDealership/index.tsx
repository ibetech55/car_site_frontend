import RegisterDealershipForm from "../../Components/Site/RegisterDealership/RegisterDealershipForm";
import useUser from "../../Hooks/UseUser";
import useLocation from "../../Hooks/UseLoaction";
import "./index.scss";

const RegisterDealership = () => {
  const { handleCreateDealership, errorEmail, errorZipCode } = useUser();
  const { handleGetCityList } = useLocation();

  return (
    <div className="register-dealership-page">
      <div className="register-dealership-page__overlay"></div>
      <div className="register-dealership-page__form">
        <RegisterDealershipForm
          handleCreateDealership={handleCreateDealership}
          errorEmail={errorEmail}
          errorZipCode={errorZipCode}
          handleGetCityList={handleGetCityList}
        />
      </div>
    </div>
  );
};

export default RegisterDealership;
