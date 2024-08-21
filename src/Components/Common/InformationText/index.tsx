import React from 'react'
import "./index.scss";
import { Typography } from 'antd';
import "./index.scss";

interface IProps {
  text: string;
  marginBottom?: string | number
}

const SectionText: React.FC<IProps> = ({ text, marginBottom }) => {
  return (
    <div style={{marginBottom:!marginBottom ? "3rem" : marginBottom}}>
      <Typography.Text>{text}</Typography.Text>
    </div>
  )
}

export default SectionText
