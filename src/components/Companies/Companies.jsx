import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./equinix.png" alt="Equinix" />
        <img src="./prologis.png" alt="Prologis" />
        <img src="./realty.png" alt="Realty" />
        <img src="./tower.png" alt="American tower" />
      </div>
    </div>
  );
};

export default Companies;
