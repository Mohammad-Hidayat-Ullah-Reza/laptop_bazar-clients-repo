import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="radial-progress text-primary animate-spin"
        style={{ "--value": 70 }}
      ></div>
    </div>
  );
};

export default Loading;
