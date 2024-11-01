
import React, { useState } from "react";
import "./Navbar.css";
import { ImFlag } from "react-icons/im";
import { TbBackground, TbWorld } from "react-icons/tb";
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
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Please input the correct zip/postal code" />
          <button>Save</button>
        </div>
      ),
    },
    {
      name: "Language & Currency",
      icon: <TbWorld />,
      items: (
        <div className="dropdown-content">
          <h1>Set language and currency</h1>
          <p>Select your preferred language and currency. You can update the settings anytime.</p>
          <div className="section">
            <h3>Language</h3>
            <input type="text" placeholder="English" className="input-field" />
            <div className="button-group">
              <button onClick={() => alert("English")}>English</button>
              <button onClick={() => alert("Spanish")}>Spanish</button>
              <button onClick={() => alert("French")}>French</button>
            </div>
          </div>
          <div className="section">
            <h3>Currency</h3>
            <input type="option" placeholder="USD" className="input-field" />
            <div className="button-group">
              <button onClick={() => alert("USD")}>USD</button>
              <button onClick={() => alert("EUR")}>EUR</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Categories",
      icon: <MdOutlinePeopleAlt />,
      items: (
        <div>
          <h1>Welcome to Alibaba.com</h1>
          <button>sign in</button><br />
          <p>Or, continue with:</p>
          <img src="/facebook.jpg" alt="facebook logo" height="40px" width= "50px" />
          <img src="/google.jpg" alt="google logo"  height="40px" width= "50px" />
          <img src="/linkdin.jpg" alt="linkdin logo"  height="40px" width= "50px" />
          <p>By signing in via social media, i agree to the 
             <u>Alibaba.com Free membership Agreement</u> and 
            Privacy Policy, and to receive emails about the platform's products and services.
          </p>
          <h4>My Alibaba</h4>
          <h4>Orders</h4>
          <h4>Messages</h4>
          <h4>RFQs</h4>
          <h4>Favorites</h4>

        </div>
      ),
    },
  ];


  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <nav className="navbar">
      <img src="/logo2.jpg" alt="Alibaba Logo" style={{ width: '50px', height: 'auto' }} />
      <div className="navbar-logo">
        <a href="/">Alibaba.com</a>
      </div>


      {/* Categories with Dropdown */}
      <ul className="navbar-categories">
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(index)}>
            {category.icon} {category.name} {category.text}
            {activeCategory === index && (
              <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                {category.items}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* User Options */}
      <div className="navbar-user-options">
        <a href="/login">Sign Up</a>
      </div><br />
      <div className="con">
      </div>
    </nav>
  );
  
};

export default Navbar;
