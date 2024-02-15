import { Col, Typography } from "antd";
import React from "react";

interface IProps {
  title: string;
  text: string;
  cols?: { xs: number; sm: number; md: number; lg: number; xl: number };
}

const colValues = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
};

const ProfileItem: React.FC<IProps> = ({ title, text, cols }) => {
  return (
    <Col {...(!cols ? colValues : cols)}>
      <div className="profile-item">
        <Typography className="profile-item__title">{title}</Typography>
        <Typography className="profile-item_">{text}</Typography>
      </div>
    </Col>
  );
};

export default ProfileItem;
