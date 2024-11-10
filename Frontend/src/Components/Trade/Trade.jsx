import React from "react";
import "./Trade.css";

export const Trade = () => {
  return (
    <div className="trade-container">
      {/* <h1>Empowering business through global trade</h1>
      <h5>
        Alibaba.com offers one-stop B2B trading solutions for global small and
        medium-sized businesses, <br />
        empowering them to transform through digital trade, grasp opportunities,
        and accelerate growth <br />
        internationally.
      </h5>  */}

      {/* Left Side: First Large Card */}
      <div className="card-large">
        <img src="/man.jpg" className="card-img" alt="Card Image" />
        <div className="card-img-overlay">
          <h5 className="card-title">OUR MISSION</h5>
          <h3 className="card-text">
            Make it easy to do business <br />
            anywhere.
          </h3>
        </div>
      </div>

      {/* Right Side: Stacked Smaller Cards */}
      <div className="card-small-container">
        <div className="card-small">
          <img src="/earth.jpg" className="card-img" alt="Card Image" />
          <div className="card-img-overlay">
            <h5 className="card-title">OUR LOCATIONS</h5>
            <h3 className="card-text">We have teams around the world.</h3>
            <p className="card-text">
              <small>
                Hangzhou, China Paris, France Munich, Germany Tokyo, Japa Seoul,
                Korea London, Uk
              </small>
            </p>
          </div>
        </div>

        <div className="card-small">
          <img src="/wind.jpg" className="card-img" alt="Card Image" />
          <div className="card-img-overlay">
            <h5 className="card-title">OUR ESG PROMISES</h5>
            <h3 className="card-text">
              Responsible technology. <br />
              Sustainable future.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
