import React from "react";
import Spin from "./assests/spinner (1).gif";

const Spinner = () => {
  return (
    <div className="mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Spin}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
