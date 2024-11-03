import React from 'react';
import './Girls.css';

export const Girls = () => {
  return (
    <div className="girls">
      <div className="text-header">
        <h1 className="header-title">
          Trade with confidence from production quality to purchase protection
        </h1>
      </div>
      <div className="cart-container">
        <div className="cart">
          <h5>Ensure production quality with</h5>
          <img src="/path/to/quality-image.jpg" alt="Quality Assurance" />
          <h5>
            Connect with a variety of suppliers with third-party-verified
            credentials and capabilities. Look for the "Verified" logo to
            begin sourcing with experienced suppliers your business could
            rely on.
          </h5>
          <button>Watch video</button>
          <u>Learn more</u>
        </div>
        <div className="cart">
          <h5>Protect your purchase with</h5>
          <img src="/path/to/protection-image.jpg" alt="Purchase Protection" />
          <h5>
            Source confidently with access to secure payment options,
            protection against product or shipping issues, and mediation
            support for any purchase-related concerns when you order and
            pay on Alibaba.com.
          </h5>
          <button>Watch video</button>
          <u>Learn more</u>
        </div>
      </div>
    </div>
  );
};
