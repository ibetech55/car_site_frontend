import { Card, Col, Form, Row, Typography } from "antd";
import DefaultButton from "../../../Common/DefaultButton";
import { CreatePrivateUserFormDto } from "../../../../Data/UserDtos/CreatePrivateUserDto";
import UploadButton from "../../../Common/UploadButton";
import { handleDateFormatMaskChange } from "../../../../Utils/handleDateFormatMaskChange";
import React, { useState } from "react";
import FormInput from "../../../Common/FormInput";
import { formValidations } from "./FormValidations";
import { handleFormChange } from "../../../../Utils/HandleFormChange";
import "./index.scss";

const initForm: CreatePrivateUserFormDto = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  password: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
  phoneNumber: "",
  userImage: undefined,
};

export interface IErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: string;
  password?: string;
  street?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  phoneNumber?: string;
}

interface IProps {
  handleCreatePrivateUser: (values: CreatePrivateUserFormDto) => void;
  registerUserError: string;
}

const RegisterUserForm: React.FC<IProps> = ({
  handleCreatePrivateUser,
  registerUserError,
}) => {
  const cols = { xs: 24, sm: 24, md: 6, lg: 6, xl: 6 };
  const colButton = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };
  const [form, setForm] = useState(initForm);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<IErrors>({});

  const handleSubmit = () => {
    setErrors({});
    const { hasErros, formErros } = formValidations(form, confirmPassword);
    if (!hasErros) {
      handleCreatePrivateUser(form);
    } else {
      setErrors(formErros);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setForm({ ...form, userImage: selectedFile });
    }
  };

  return (
    <Card className="register-private-user-form">
      <Typography.Title className="register-private-user-form__title">
        Sign Up Private User
      </Typography.Title>
      <Form onFinish={handleSubmit}>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols}>
            <FormInput
              id="firstName"
              name="firstName"
              label="First Name"
              value={form.firstName}
              onChange={(e) => handleFormChange(e, form, setForm)}
              required
              error={errors.firstName}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="lastName"
              name="lastName"
              label="Last Name"
              value={form.lastName}
              onChange={(e) => handleFormChange(e, form, setForm)}
              required
              error={errors.lastName}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="email"
              name="email"
              label="E-mail"
              value={form.email}
              onChange={(e) => handleFormChange(e, form, setForm)}
              required
              error={errors.email || registerUserError}
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
              value={form.dateOfBirth}
              error={errors.dateOfBirth}
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  dateOfBirth: handleDateFormatMaskChange(e.target.value),
                })
              }
            />
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols}>
            <UploadButton title="User Image" onFileChange={handleFileChange} />
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="row-gutter-bottom">
          <Col {...cols}>
            <FormInput
              id="password"
              name="password"
              type="password"
              label="Password"
              value={form.password}
              onChange={(e) => handleFormChange(e, form, setForm)}
              required
            />
          </Col>
          <Col {...cols}>
            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              onChange={(e) => handleFormChange(e, form, setForm)}
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
              onChange={(e) => handleFormChange(e, form, setForm)}
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
              onChange={(e) => handleFormChange(e, form, setForm)}
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
              onChange={(e) => handleFormChange(e, form, setForm)}
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
              onChange={(e) => handleFormChange(e, form, setForm)}
              required
              error={errors.phoneNumber}
            />
          </Col>
        </Row>

        <Row gutter={[8, 8]} className="register-private-user-form__button-row">
          <Col {...colButton}>
            <Form.Item>
              <DefaultButton title="Register User" htmlType="submit" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default RegisterUserForm;
