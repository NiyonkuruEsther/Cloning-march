import React, { Children } from "react";

const Wrapper = ({ styles, children }) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-2 overflow-hidden ${styles}`}>
      {children}
    </div>
  );
};

export default Wrapper;
