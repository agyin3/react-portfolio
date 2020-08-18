import React from "react";
import Lottie from "react-lottie";
import loader from "../../utils/loader.json"

const LottieLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
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
