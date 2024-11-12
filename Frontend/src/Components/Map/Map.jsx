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
      <div className="footer">
        <table>
          <thead>
            <tr>
              <th>Get support</th>
              <th>Payments and Protections</th>
              <th>Source on Alibaba.com</th>
              <th>Sell on Alibaba.com</th>
              <th>Get to know us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Help center</td>
              <td>Safe and easy payments</td>
              <td>Request for Quotation</td>
              <td>Start selling</td>
              <td>About Alibaba.com</td>
            </tr>
            <tr>
              <td>Live chat</td>
              <td>Money-back policy</td>
              <td>Membership program</td>
              <td>Seller Central</td>
              <td>Corporate responsibility</td>
            </tr>
            <tr>
              <td>Check order status</td>
              <td>On-time shipping</td>
              <td>Alibaba.com Logistics</td>
              <td>Become a Verified Supplier</td>
              <td>News center</td>
            </tr>
            <tr>
              <td>Refunds</td>
              <td>After-sales protections</td>
              <td>Sales tax and VAT</td>
              <td>Partnerships</td>
              <td>Careers</td>
            </tr>
            <tr>
              <td>Report abuse</td>
              <td>Product monitoring services</td>
              <td>Alibaba.com Reads</td>
              <td>Download the app for suppliers</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="images-add">
        <div className="images-flex">
          <img src="/id.png" alt="" height="40px"  width="40px" />
          <img src="/dss.png" alt=""height="40px"  width="40px" />
          <img src="/ssl.png" alt="" height="40px"  width="40px" />
          <img src="/verisign.png" alt="" height="40px"  width="40px" />
          <img src="/visa.png" alt="" height="40px"  width="40px"/>
          <img src="/visaa.png" alt=""height="40px"  width="40px" />
          <img src="/color.png" alt="" height="40px"  width="40px" />
          <img src="/tt.png" alt="" height="40px"  width="40px"/>
        </div>
      </div>
    </div>
  );
};
export default Map;
