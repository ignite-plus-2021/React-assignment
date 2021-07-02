import React from "react";
import "./Education.css";
import { EduData } from "../../data/education";
import Seperator from "../../common/social-contact/seperator/Seperator";
import Timeline from "./timeline/Timeline";

function Education() {
  const data = EduData;
  const data2 = EduData[0];
  return (
    <div className="education">
      <Seperator />
      <label className="section-title">Education</label>
      <div className="wrapper">
        <div className="box">
          <div className="lists">
            {data.map((edu) => {
              return <Timeline edu={edu} />;
            })}
          </div>
        </div>
        <div className="box content-box">
          <div className="content">
            <div className="company-title">
              <a href="#" className="link">
                {data2.inst}
              </a>
            </div>
            <p className="data">{data2.date}</p>
            <div className="description">
              <ul>
                <li>{data2.desc}</li>
                <li>{data2.marks}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
