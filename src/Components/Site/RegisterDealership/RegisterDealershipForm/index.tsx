import { Card, Col, Form, Row, Typography } from "antd";
import DefaultButton from "../../../Common/DefaultButton";
import { useState } from "react";
import UploadButton from "../../../Common/UploadButton";
import { CreateDealershipFormDto } from "../../../../Data/UserDtos/CreateDealershipDto";
import FormInput from "../../../Common/FormInput";
import { formValidations } from "./FormValidations";
import { handleFormChange } from "../../../../Utils/HandleFormChange";

const initForm: CreateDealershipFormDto = {
  contactName: "",
  dealershipName: "",
  email: "",
  password: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
  phoneNumber: "",
  dealershipLogo: undefined,
};

interface IProps {
  handleCreateDealership: (values: CreateDealershipFormDto) => void;
  registerUserError: string;
}

export interface IErrors {
  contactName?: string;
  dealershipName?: string;
  email?: string;
  password?: string;
  street?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  phoneNumber?: string;
}
const RegisterUserForm: React.FC<IProps> = ({
  handleCreateDealership,
  registerUserError,
}) => {
  const cols = { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 };
  const cols2 = { xs: 24, sm: 24, md: 6, lg: 8, xl: 8 };
  const colButton = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };
  const [form, setForm] = useState<CreateDealershipFormDto>(initForm);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<IErrors>({});

  const handleSubmit = () => {
    setErrors({})
    const { hasErros, formErros } = formValidations(form, confirmPassword);
    if (!hasErros) {
      handleCreateDealership(form);
    } else {
      setErrors(formErros);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setForm({ ...form, dealershipLogo: selectedFile });
    }
  };

  return (
    <Card className="register-dealership-form">
      <Typography.Title className="register-dealership-form__title">
        Sign Up Dealership
      </Typography.Title>
      <Form layout="vertical" onFinish={() => handleSubmit()}>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols2}>
            <FormInput
              id="contactName"
              name="contactName"
              label="Contact Name"
              value={form.contactName}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.contactName}
            />
          </Col>
          <Col {...cols2}>
            <FormInput
              id="dealershipName"
              name="dealershipName"
              label="Dealership Name"
              value={form.dealershipName}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.dealershipName}
            />
          </Col>
          <Col {...cols2}>
            <FormInput
              id="email"
              name="email"
              label="E-mail"
              value={form.email}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.email || registerUserError}
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col {...cols}>
            <Form.Item label="Dealership Logo" name="dealershipLogo" className="row-gutter-bottom">
              <UploadButton
                title="Dealership Logo"
                onFileChange={handleFileChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols}>
            <FormInput
              id="password"
              name="password"
              label="Password"
              value={form.password}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              type="password"
              required
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              type="password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
              error={errors.password}
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col {...cols}>
            <FormInput
              id="street"
              name="street"
              type="street"
              label="Street"
              value={form.street}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.street}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="state"
              name="state"
              type="state"
              label="State"
              value={form.state}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.state}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="city"
              name="city"
              type="city"
              label="City"
              value={form.city}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.city}
            />
          </Col>
          <Col {...cols} className="row-gutter-bottom">
            <FormInput
              id="zipCode"
              name="zipCode"
              type="zipCode"
              label="Zip Code"
              value={form.zipCode}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              error={errors.zipCode}
              required
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols}>
            <FormInput
              id="phoneNumber"
              name="phoneNumber"
              type="phoneNumber"
              label="Phone Number"
              value={form.phoneNumber}
              onChange={(e)=>handleFormChange(e, form, setForm)}
              required
              error={errors.phoneNumber}
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="register-dealership-form__button-row">
          <Col {...colButton}>
            <Form.Item>
              <DefaultButton title="Register Dealership" htmlType="submit" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default RegisterUserForm;
