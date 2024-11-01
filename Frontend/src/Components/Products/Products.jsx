import React from "react";
import "./Products.css";

export const Products = () => {
  return (
    <div className="products-text-items">
      <h1>Discover your next business opportunity</h1>
      <div className="products-card-container">
        {/* Top Ranking Card */}
        <div className="products-card">
          <div className="products-card-header">
            <h2>Top ranking</h2>
            <u>view more</u>
          </div>

          <div className="products-cart-card">
            <h6>Most popular</h6>
            <p>5G SmartPhone</p>
            <img
              src="./public/SmartPhone.jpg"
              alt="5G Smartphone"
              className="products-top-image"
            />{" "}
            <br />
            <img
              src="./public/SmartPhone1.jpg"
              alt="5G Smartphone"
              className="products-bottom-image"
            />
          </div>
        </div>

        {/* New Arrivals Card */}
        <div className="products-card">
          <div className="products-card-header">
            <h2>New arrivals</h2>
            <u>view more</u>
          </div>

          <div className="products-cart-card">
            <h6>119,000+ products added today</h6>
            <img
              src="./public/jacket.jpg"
              alt="Jacket"
              className="products-top-image"
            />
            <img
              src="./public/iphone.jpg"
              alt="iPhone"
              className="products-bottom-image"
            />
            <img
              src="./public/airpod.jpg"
              alt="Airpod"
              className="products-bottom-image"
            />
            <img
              src="./public/bottle.jpg"
              alt="Bottle"
              className="products-bottom-image"
            />
          </div>
        </div>

        {/* Top Deals Card */}
        <div className="products-card">
          <div className="products-card-header">
            <h2>Top deals</h2>
            <u>view more</u>
          </div>

          <div className="products-cart-card">
            <img
              src="./public/15promax.jpg"
              alt="iPhone 15 Pro Max"
              className="products-top-image"
            />
            <h5>180-day lowest price</h5>
            <div className="products-best-seller">
              <h5>Deals on best sellers</h5>
              <img
                src="./public/teeth.jpg"
                alt="Teeth Care"
                className="products-bottom-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
