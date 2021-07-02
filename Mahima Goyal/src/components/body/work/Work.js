import React from "react";
import Seperator from "../../common/social-contact/seperator/Seperator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card/WorkCard";
import "./Work.css";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Experience</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
