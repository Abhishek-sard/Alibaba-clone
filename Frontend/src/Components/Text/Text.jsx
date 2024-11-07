import React from "react";
import "./Text.css";
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
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};
export default Text;
