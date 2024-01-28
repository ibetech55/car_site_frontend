import { CarOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Flex, Typography } from "antd";
import "./signUpOptions.scss";
import { useNavigate } from "react-router";

const SignUpOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="sign-up-options">
      <Typography.Title className="sign-up-options__card-title">
        Choose a type:
      </Typography.Title>
      <Flex
        gap="middle"
        vertical={false}
        align="center"
        justify="center"
        className="sign-up-options__flex"
      >
        <Card
          className="sign-up-options__card"
          onClick={() => navigate("/register_dealership")}
        >
          <Typography.Title className="sign-up-options__card-title">
            Dealership
          </Typography.Title>
          <CarOutlined className="sign-up-options__card-icon" />
        </Card>
        <Card
          className="sign-up-options__card"
          onClick={() => navigate("/register_user")}
        >
          <Typography.Title className="sign-up-options__card-title">
            Private User
          </Typography.Title>
          <UserOutlined className="sign-up-options__card-icon" />
        </Card>
      </Flex>
    </div>
  );
};

export default SignUpOptions;
