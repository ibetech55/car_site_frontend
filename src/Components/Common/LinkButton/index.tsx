import { SizeType } from "antd/es/config-provider/SizeContext";
import { Link } from "react-router-dom";
import DefaultButton from "../DefaultButton";
import "./index.scss";

interface IProps {
  href: string;
  title: string;
  id?: string;
  type?: "primary" | "link" | "text" | "default" | "dashed" | undefined;
  size?: SizeType;
  style?: React.CSSProperties;
  outline?: boolean;
  pageScroll?: boolean;
}
const LinkButton: React.FC<IProps> = ({
  href,
  title,
  id,
  style,
  type = "primary",
  size = "large",
  outline = false,
  pageScroll,
}) => {
  return !pageScroll ? (
    <Link to={href} style={style}>
      <DefaultButton
        title={title}
        type={type}
        size={size}
        outline={outline}
        id={id}
      />
    </Link>
  ) : (
    <a href={href} style={style}>
      <DefaultButton
        title={title}
        type={type}
        size={size}
        outline={outline}
        id={id}
      />
    </a>
  );
};

export default LinkButton;
