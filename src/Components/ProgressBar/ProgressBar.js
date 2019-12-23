import React from "react";
import "./ProgressBar.css"

export default function ProgressBar() {
  return (
    <div className="progress" style={{ height: "5px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "80%" }}
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}
