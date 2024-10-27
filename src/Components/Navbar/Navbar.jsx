import React, { useState } from "react";
import "./Navbar.css";
import { ImFlag } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";


const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Deliver to: ", icon: <ImFlag />, items: ["Phones", "Laptops", "Cameras"] },
    { name: "World", icon: <TbWorld />, items: ["Men", "Women", "Kids"] },
    { name: "Home ", icon:<MdOutlinePeopleAlt/>, items: ["Furniture", "Decor", "Kitchen"] },
  ];

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

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
            {category.icon} {category.name}
            {activeCategory === index && (
              <ul className="dropdown">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
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
