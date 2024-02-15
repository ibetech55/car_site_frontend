import React from "react";

interface IProps {
  loading: boolean;
}

const LoadingComponent: React.FC<IProps> = ({ loading }) => {
  return loading && <div className="loading"></div>;
};

export default LoadingComponent;
