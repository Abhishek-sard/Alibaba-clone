import React from "react";
import "./Cart.css";
import { MdDownloadForOffline } from "react-icons/md";
import { TfiLayersAlt } from "react-icons/tfi";
import { SiTicktick } from "react-icons/si";
import { CiGrid41 } from "react-icons/ci";

const Cart = () => {
  return (
    <div className="cart">
      <div className="card">
        <div className="card-body">
          <CiGrid41 />
          <h1>
            Millions of business <br />
            offerings
          </h1>
          <p>
            Explore products and suppliers for your business from millions of
            offerings worldwide.{" "}
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <SiTicktick />
          <h1>
            Assured quality and <br />
            transactions
          </h1>
          <p>
            Ensure production quality from verified suppliers, with your orders
            protected from payment to delivery.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <MdDownloadForOffline />
          <h1>
            one-stop trading <br />
            solution
          </h1>
          <p>
            Order seamlessly from product/supplier search to order management,
            payment, and fulfillment.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <TfiLayersAlt />
          <h1>
            Tailored trading <br />
            experience
          </h1>
          <p>
            Get curated benefits, such as exclusive discounts, enhanced
            protection, and extra support, to help grow your business every step
            of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
