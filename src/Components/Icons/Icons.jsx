import React from "react";
import "./Icons.css";
import { RiCustomerService2Line, RiProductHuntLine } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { TbHomeCog } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { MdOutlineSmartToy } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoDiamondSharp } from "react-icons/io5";
// import { MdOutlineTableRestaurant } from "react-icons/md";

export const Icons = () => {
  return (
    <div>
      <div className="offerings-section">
        <div className="offerings-text">
          <h2>Explore millions of offerings tailored to your business needs</h2>
        </div>
        <div className="offerings-grid">
          <div className="offering-item">
            <h1>200M+</h1>
            <p>Products</p>
          </div>
          <div className="offering-item">
            <h1>200K+</h1>
            <p>Suppliers</p>
          </div>
          <div className="offering-item">
            <h1>5,900</h1>
            <p>Product categories</p>
          </div>
          <div className="offering-item">
            <h1>200+</h1>
            <p>Countries and regions</p>
          </div>
        </div>
      </div>

      <div className="icons-section">
        <div className="icon-item">
          <RiCustomerService2Line className="icon" />
          <p>Customer Service</p>
        </div>
        <div className="icon-item">
          <RiProductHuntLine className="icon" />
          <p>Product Hunt</p>
        </div>
        <div className="icon-item">
          <GiClothes className="icon" />
          <p>Apparel & Accessories</p>
        </div>
        <div className="icon-item">
          <TbHomeCog className="icon" />
          <p>Home & Garden</p>
        </div>
        <div className="icon-item">
          <GiLipstick className="icon" />
          <p>Beauty</p>
        </div>
        <div className="icon-item">
          <FiPackage className="icon" />
          <p>Packaging & Printing</p>
        </div>
        <div className="icon-item">
          <MdOutlineSmartToy className="icon" />
          <p>Mother, kids & Toys</p>
        </div>
        <div className="icon-item">
          <FaCarAlt className="icon" />
          <p>Vehicle Parts & Accessories</p>
        </div>
        <div className="icon-item">
          <PiPlantFill className="icon" />
          <p>Environment</p>
        </div>
        <div className="icon-item">
          <FaHeadphones className="icon" />
          <p>Consumer Electronics</p>
        </div>
        <div className="icon-item">
          <CgGym className="icon" />
          <p>Sports & Entertainment</p>
        </div>
        <div className="icon-item">
          <IoBagHandleOutline className="icon" />
          <p>Commercial Equipment</p>
        </div>
        <div className="icon-item">
          <IoDiamondSharp className="icon" />
          <p>Jewelry, Eyewear</p>
        </div>
        {/* <div className="icon-item">
          <MdOutlineTableRestaurant className="icon" />
          <p>Furniture</p>
        </div> */}
      </div>
    </div>
  );
};

export default Icons;
