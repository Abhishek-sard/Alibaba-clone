import React from "react";
import "./Sample.css";
export const Sample = () => {
  return (
    <div className="sample-factory">
      <h2>Source direct-from-factory</h2>
      <div className="cart-factory">
        <div className="cart-factory__item">
          <h4>Get Sample</h4>
          <img src="./public/Cloth.jpg" alt="" />
          <h5>view more</h5>
        </div>
        <div className="cart-factory-item">
          <h4>take factory live tour</h4>
          <img src="./public/Factory1.jpg" alt="" />
          <h5>view more</h5>
        </div>
        <div className="cart-factory-item">
          <h4>Connect with top-ranking manufacture </h4>
          <img src="./public/tin.jpg" alt="" />
          <h5>view more</h5>
        </div>
      </div>
    </div>
  );
};
export default Sample;
