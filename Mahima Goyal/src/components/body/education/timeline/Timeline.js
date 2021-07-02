import React from "react";
import "./Timeline.css";

function Timeline({ edu }) {
  return (
    <div className="list">
      <div className="border-vertical"></div>
      <div className="border-horizontal"></div>
      <div className="circle"></div>
      <div className="list-value">{edu.title}</div>
    </div>
  );
}

export default Timeline;
