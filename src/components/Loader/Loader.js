import { RotatingLines } from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <RotatingLines
      strokeColor="#104eb86e"
      strokeWidth="5"
      animationDuration="0.75"
      width="32"
      visible={true}
    />
  );
};

export default LoaderSpinner;