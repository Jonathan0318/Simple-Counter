import React from "react";
import "./SecondsCounter.css";

const SecondsCounter = ({ seconds }) => {
  const secondsString = seconds.toString().padStart(6, "0");

  return (
    <div className="container">
      <div className="clock">
        {secondsString.split("").map((digit, i) => (
          <div key={i} className="digit">{digit}</div>
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter;
