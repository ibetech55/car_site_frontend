interface IProps {
  height?: number | string;
  width?: number | string;
}

const Logo: React.FC<IProps> = ({ height = 45, width = 125 }) => {
  return (
      <img src="/assets/logo.png" alt="logo" width={width} height={height} />
  );
};

export default Logo;
