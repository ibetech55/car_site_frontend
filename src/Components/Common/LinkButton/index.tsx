import { Button, Typography } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import './index.scss';

interface IProps {
  href: string;
  title: string;
  id: string;
  type?: "primary" | "link" | "text" | "default" | "dashed" | undefined;
  size?: SizeType;
  style?: React.CSSProperties;
  outline?: boolean;
}
const LinkButton: React.FC<IProps> = ({
  href,
  title,
  id,
  style,
  type = "primary",
  size = "large",
  outline = false,
}) => {
  return (
    <Typography.Link href={href} style={style} className="link-button">
      <Button
        id={id}
        type={type}
        size={size}
        ghost={outline}
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        {title}
      </Button>
    </Typography.Link>
  );
};

export default LinkButton;
