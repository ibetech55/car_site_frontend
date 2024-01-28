import BackButton from "../../Components/Common/BackButton";
import SignUpOptions from "../../Components/Site/Options/SignUpOptions";

const Options = () => {
  return (
    <div className="options-page">
      <div className="options-page__back-button">
        <BackButton text="Back to home page" href="/" />
      </div>
      <div className="options-page__sign-up-options">
        <SignUpOptions />
      </div>
    </div>
  );
};

export default Options;
