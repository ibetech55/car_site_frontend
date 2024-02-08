import { Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import DefaultButton from "../../../Common/DefaultButton";
import { LoginFormDto } from "../../../../Data/AuthDtos/loginDtos";
import { useState } from "react";
import "./signInForm.scss";

interface IProps {
  handleLogin: (values: LoginFormDto) => void;
  loginError: string;
}

const initForm: LoginFormDto = {
  password: "",
  email: "",
};
const SignInForm: React.FC<IProps> = ({
  handleLogin,
  loginError,
}) => {
  const [form, setForm] = useState(initForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-form">
      <div className="sign-in-form__image">
        <div className="sign-in-form__overlay"></div>
      </div>
      <div className="sign-in-form__form">
        <Form layout="vertical" onFinish={() => handleLogin(form)}>
          <Typography.Title className="sign-in-form__title">
            Car Site
          </Typography.Title>
          <div className="sign-in-form__logo-image">
            <img src="/assets/logo.png" alt="logo pic" />
          </div>
          <Typography className="sign-in-form__login-error">
            {loginError}
          </Typography>
          <Form.Item
            className="sign-in-form__label"
            label="E-mail"
            name="email"
          >
            <Input value={form.email} onChange={handleChange} name="email" />
          </Form.Item>
          <Form.Item
            className="sign-in-form__label"
            label="Password"
            name="password"
          >
            <Input
              value={form.password}
              onChange={handleChange}
              name="password"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <DefaultButton
              title="Sign In"
              block
              size="middle"
              htmlType="submit"
            />
          </Form.Item>
          <div className="sign-in-form__links">
            <Link to="/">Forgot email or Password</Link>
            <Link to="/sign_up_options">Sign Up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export { SignInForm };
