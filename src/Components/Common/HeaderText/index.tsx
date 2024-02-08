import { Typography } from "antd";
import React from "react";
import './index.scss';

interface IProps {
  text: string;
  size?: number | string;
}
const HeaderText: React.FC<IProps> = ({ text, size }) => {
  return <Typography.Title className="header-text" style={{fontSize:size}}>{text}</Typography.Title>;
};

export default HeaderText;
