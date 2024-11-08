import React from "react";
import "./Text.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Text = () => {
  return (
    <div className="Container-parts">
      <div className="text-parts">
        <h1>
          Get tailored discounts, services, and tools for <br />
          your business stage.
        </h1>
        <h5>
          Grow with curated benefits offered by the free Alibaba.com Membership,
          whether you are a small <br />
          business needing the essentials to start sourcing or a
          well-established enterprise looking for tools and <br />
          solutions for more complex orders.
        </h5>
        <h6>
          <u>Learn More</u>
        </h6>
      </div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image1.png" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="image2.png" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="image3.png" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Text;
