import React from "react";
import imgAMY from "..//..//assets/image-amy.webp";
import "..//About/About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="img-container">
          <img className="img-AMY" src={imgAMY} alt="" />
        </div>
        <div className="text-container">
          <h3 className="text-header">
            I'm Amy, and I'd love to work on your next project
          </h3>

          <p className="text-heading">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <div className="btn-container">
            <a className="cta-button orange" href="/">
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
