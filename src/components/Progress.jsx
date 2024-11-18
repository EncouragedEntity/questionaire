import React from "react";

const Progress = ({ percentage }) => {
  return (
    <div className="progressbar">
      <div
        style={{ width: `${percentage}%` }}
        className="progreesbar__inner"
      ></div>
    </div>
  );
};

export default Progress;
