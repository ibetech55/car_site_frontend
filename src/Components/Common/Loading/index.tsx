import React from "react";

interface IProps {
  loading: boolean;
}

const LoadingComponent: React.FC<IProps> = ({ loading }) => {
  return loading && <div className="loading">
    <div className="loader"></div>
  </div>;
};

export default LoadingComponent;
