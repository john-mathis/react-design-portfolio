import React from "react";
import "..//Skills/Skills.css";

import graphicDesign from "..//..//assets/pattern-graphic-design.svg";
import uiux from "..//..//assets/pattern-ui-ux.svg";
import apps from "..//..//assets/pattern-apps.svg";
import illustrations from "..//..//assets/pattern-illustrations.svg";
import photography from "..//..//assets/pattern-photography.svg";
import motionGraphics from "..//..//assets/pattern-motion-graphics.svg";

const Skills = () => {
  return (
    <>
      <div className="grid-container">
        <div className="graphic-design  skills-container container-lg">
          <img className="container-pattern" src={graphicDesign} alt=""></img>
          <p className="container-title">Graphic Design</p>
        </div>
        <div className="ui-ux skills-container container-sm">
          <img className="container-pattern" src={uiux} alt="" />
          <p className="container-title">UI/UX</p>
        </div>
        <div className="apps skills-container container-sm">
          <img className="container-pattern" src={apps} alt="" />
          <p className="container-title">Apps</p>
        </div>
        <div className="illustrations skills-container container-md">
          <img className="container-pattern" src={illustrations} alt="" />
          <p className="container-title">Illustrations</p>
        </div>
        <div className="photography skills-container container-md">
          <img className="container-pattern" src={photography} alt="" />
          <p className="container-title">Photography</p>
        </div>
        <div className="motion-graphics skills-container container-md">
          <img className="container-pattern" src={motionGraphics} alt="" />
          <p className="container-title">Motion Graphics</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
