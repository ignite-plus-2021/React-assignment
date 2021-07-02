import React from "react";
import Seperator from "../../common/social-contact/seperator/Seperator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card/SkillCard";
import "./Skills.css";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      <div className="skills-conatiner">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
