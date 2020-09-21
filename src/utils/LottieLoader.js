import React from "react";
import Lottie from "react-lottie";


const LottieLoader = ({ lottie }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={'80%'} width={'80%'} />
    </div>
  );
};

export default LottieLoader;
