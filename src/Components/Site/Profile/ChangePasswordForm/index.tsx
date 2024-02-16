import React from "react";
import {
  ChangePasswordFormDto,
  IErrorsPasswordForm,
} from "../../../../Data/UserDtos/PasswordDtos";
import { Col, Form, Row } from "antd";
import { handleFormChange } from "../../../../Utils/HandleFormChange";
import FormInput from "../../../Common/FormInput";

interface IProps {
  setForm: (values: ChangePasswordFormDto) => void;
  form: ChangePasswordFormDto;
  errors: IErrorsPasswordForm;
}
const ChangePasswordForm: React.FC<IProps> = ({form, setForm, errors}) => {
  const cols = { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 };
  return (
    <Form layout="vertical">
      <Row gutter={[8, 8]}>
        <Col {...cols}>
          <FormInput
            id="currentPassword"
            name="currentPassword"
            label="Current Password"
            value={form?.currentPassword}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.currentPassword}
            type="password"
          />
        </Col>
        <Col {...cols}>
          <FormInput
            id="newPassword"
            name="newPassword"
            label="New Password"
            value={form.newPassword}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.newPassword}
            type="password"
          />
        </Col>
        <Col {...cols}>
          <FormInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) => handleFormChange(e, form, setForm)}
            error={errors.confirmPassword}
            type="password"
          />
        </Col>
      </Row>

    </Form>
  );
};

export default ChangePasswordForm;
