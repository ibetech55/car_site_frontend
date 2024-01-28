import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import React from "react";
import './index.scss';

interface IProps {
  title: string;
  id?: string;
  type?: "primary" | "link" | "text" | "default" | "dashed" | undefined;
  size?: SizeType;
  outline?: boolean;
  icon?: React.ReactNode;
  block?: boolean;
}
const DefaultButton: React.FC<IProps> = ({
  title,
  id,
  type = "primary",
  size = "large",
  outline = false,
  icon,
  block
}) => {
  return (
    <Button
      className={
        !outline
          ? "default-button default-button__default"
          : "default-button default-button__outline-button"
      }
      id={id}
      type={type}
      size={size}
      ghost={outline}
      icon={icon}
      block={block}
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
