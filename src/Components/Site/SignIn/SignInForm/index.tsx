import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import "./signInForm.scss";

const SignInForm = () => {
  return (
    <div className="sign-in-form">
      <div className="sign-in-form__image">
        <div className="sign-in-form__overlay"></div>
      </div>
      <div className="sign-in-form__form">
        <Typography.Title className="sign-in-form__title">
          Car Site
        </Typography.Title>
        <div className="sign-in-form__logo-image">
          <img src="/assets/logo.png" alt="logo pic" />
        </div>
        <Form layout="vertical">
          <Form.Item
            className="sign-in-form__label"
            label="E-mail"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="sign-in-form__label"
            label="Password"
            name="password"
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" block>
              Sign In
            </Button>
          </Form.Item>
          <div className="sign-in-form__links">
            <Link to="/">Forgot email or Password</Link>
            <Link to="/options">Sign Up</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export { SignInForm };
