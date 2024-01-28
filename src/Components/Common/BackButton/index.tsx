import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import "./backButton.scss";

interface IProps {
  text: string;
  href: string;
}
const BackButton: React.FC<IProps> = ({ text, href }) => {
  return (
    <div className="back-button">
      <Typography.Link href={href} className="back-button__icon-container">
        <ArrowLeftOutlined className="back-button__icon-container__icon" />
      </Typography.Link>
      <Typography.Link href={href}>{text}</Typography.Link>
    </div>
  );
};

export default BackButton;
