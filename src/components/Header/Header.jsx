import React from "react";
import "./Header.css";
// import "";

const Header = () => {
  return (
    <div>
      <div className="h-wrapper">
        <div className="flexCenter h-container innerwidth paddings">
          <img src="./logo.png" alt="logo" width={100} />

          <div className="flexCenter h-menu">
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
