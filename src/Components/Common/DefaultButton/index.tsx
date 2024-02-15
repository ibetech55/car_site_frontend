import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import React from "react";
import "./index.scss";

interface IProps {
  title: string;
  id?: string;
  type?: "primary" | "link" | "text" | "default" | "dashed" | undefined;
  size?: SizeType;
  outline?: boolean;
  icon?: React.ReactNode;
  block?: boolean;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  danger?: boolean;
}
const DefaultButton: React.FC<IProps> = ({
  title,
  id,
  type = "primary",
  size = "middle",
  outline = false,
  icon,
  block,
  htmlType,
  onClick,
  danger = false,
}) => {
  const handleClassName = () => {
    if (!outline && !danger) return "default-button default-button__default";
    if (danger && outline)
      return "default-button default-button__danger-outline";
    if (danger) return "default-button default-button__danger";
    else return "default-button default-button__outline-button";
  };
  return (
    <Button
      className={handleClassName()}
      id={id}
      type={type}
      size={size}
      ghost={outline}
      icon={icon}
      block={block}
      htmlType={htmlType}
      onClick={onClick}
      danger={danger}
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      {title}
    </Button>
  );
};

export default DefaultButton;
