import React from "react";
import "./Trade.css";

export const Trade = () => {
  return (
    <div className="trade-container">
      {/* Left Side: First Large Card */}
      <div className="card-large">
        <img src="/man.jpg.png" className="card-img" alt="Card Image" />
        <div className="card-img-overlay">
          <h5 className="card-title">OUR MISSION</h5>
          <p className="card-text">
            Make it easy to do business <br />
            anywhere.
          </p>
        </div>
      </div>

      {/* Right Side: Stacked Smaller Cards */}
      <div className="card-small-container">
        <div className="card-small">
          <img src="/earth.jpg.png" className="card-img" alt="Card Image" />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card-small">
          <img src="/wind.jpg.png" className="card-img" alt="Card Image" />
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
