import React from "react";
import "./Cart2.css";

export const Cart2 = () => {
  return (
    <div className="home">
      <div className="text-writing">
        <h1>Trade with confidence from <br /> Production quality to purchase protection</h1>
      </div>

      <div className="cart2">
        <h5>Ensure production quality with</h5>
        <img src="/supplier.jpg" alt="supplier logo" />
        <p>Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.</p>
        
        <div className="button-container">
          <button className="home-button">Watch video</button>
          <u>Learn more</u>
        </div>
      </div>

      <div className="cart2">
        <h5>Protect your purchase with</h5>
        <img src="/trade.jpg" alt="trade logo" />
        <p>Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.</p>
        
        <div className="button-container">
          <button className="home-button">Watch video</button>
          <u>Learn more</u>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
