import React from "react";
import "./Map.css";

export const Map = () => {
  return (
    <div className="map-text">
      <h2>Find suppliers by country or region</h2>
      <h6>
        <u>View More</u>
      </h6>
      <div className="map-country">
        <div className="images-country">
          <img src="/japan.jpg" alt="" />
          <p>Japan</p>
        </div>
        <div className="images-country">
          <img src="/Thailand.jpg" alt="" />
          <p>Thailand</p>
        </div>
        <div className="images-country">
          <img src="/turkey.jpg" alt="" />
          <p>Turkiye</p>
        </div>
        <div className="images-country">
          <img src="/malaysia.jpg" alt="" />
          <p>Malaysia</p>
        </div>
        <div className="images-country">
          <img src="/vietnam.jpg" alt="" />
          <p>Vietnam</p>
        </div>
        <div className="images-country">
          <img src="/russia.jpg" alt="" />
          <p>Russia</p>
        </div>
        <div className="images-country">
          <img src="/southkorea.jpg" alt="" />
          <p>South Korea</p>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};
export default Map;
