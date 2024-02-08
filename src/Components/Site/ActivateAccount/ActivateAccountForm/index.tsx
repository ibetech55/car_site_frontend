import { useState } from "react";
import FormInput from "../../../Common/FormInput";
import { Card, Col, Form, Row } from "antd";
import DefaultButton from "../../../Common/DefaultButton";
import HeaderText from "../../../Common/HeaderText";
import Logo from "../../../Common/Logo";
import useClearError from "../../../../Utils/UseClearError";

interface IProps {
  accessCodeToken: string;
  handleConfirmAccessCode: (
    accessCode: string,
    accessCodeToken: string
  ) => void;
  confirmAccessCodeError: string;
}
const ActivateAccountForm: React.FC<IProps> = ({
  accessCodeToken,
  handleConfirmAccessCode,
  confirmAccessCodeError,
}) => {
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!accessCode) {
      return setError("Please, inform your access code");
    } else {
      handleConfirmAccessCode(accessCode, accessCodeToken);
    }
  };

  useClearError({ action: () => setError(""), errorString: [error] });
  return (
    <Card className="activate-account-form">
      <Form onFinish={handleSubmit}>
        <div className="activate-account-form__logo">
          <Logo />
        </div>
        <HeaderText text="Activate Account" size={25} />
        <Row className="row-gutter-bottom">
          <Col xs={24}>
            <FormInput
              id="accessCode"
              name="accessCode"
              label="Access Code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              error={error || confirmAccessCodeError}
            />
          </Col>
        </Row>
        <DefaultButton title="Activate Account" htmlType="submit" block />
      </Form>
    </Card>
  );
};

export default ActivateAccountForm;
