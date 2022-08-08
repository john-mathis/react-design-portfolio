import React from "react";

import LogoImg from "..//..//assets/logo.svg";
import "..//Logo/Logo.css";

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <img className="logo" src={LogoImg} alt="logo" />
        <a className="cta-button black" href="#">
          Free Consultation
        </a>
      </div>
    </>
  );
};

export default Logo;
