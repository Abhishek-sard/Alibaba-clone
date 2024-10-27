import React, { useState } from "react";
import "./Navbar.css";
import { ImFlag } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Deliver to",
      icon: <ImFlag />,
      text: "NP",
      items: (
        <div>
          <h1>Specify your location</h1>
          <p>Shipping options and fees vary based on your location</p>
          <button onClick={() => console.log("Login button clicked")}>Sign in to add address</button>
          <u>or</u>
          <input type="text" placeholder="" />
          <input type="text" placeholder="please input the right zip/postal code." />
          <button>save</button>
        </div>
      ),
    },
    { icon: <TbWorld />, items: ["Men", "Women", "Kids"] },
    { icon: <MdOutlinePeopleAlt />, items: ["Furniture", "Decor", "Kitchen"] },
  ];

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };
  const handleDropdownClick = (event)=>{
    event.stopPropagation();
  }

  return (
    <nav className="navbar">
      <img src="./public/logo2.jpg" alt="Alibaba Logo" style={{ width: '50px', height: 'auto' }} />
      <div className="navbar-logo">
        <a href="/">Alibaba.com</a>
      </div>

      {/* Categories with Dropdown */}
      <ul className="navbar-categories">
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(index)}>
            {category.icon} {category.name} {category.text}
            {activeCategory === index && (
              <ul className="dropdown" onClick={handleDropdownClick}>
                {Array.isArray(category.items) ? (
                  category.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)
                ) : (
                  <li>{category.items}</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* User Options */}
      <div className="navbar-user-options">
        <a href="/login">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
