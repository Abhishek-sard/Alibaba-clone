import React, { useState } from 'react';
import './Pointer.css';
import { FiSearch } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { AiOutlineSwap } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

export const Pointer = () => {
  const [selectedImage, setSelectedImage] = useState('/screenshort1.png');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const iconDescriptions = {
    search: 'Search and filter form millions of product and supplier offerings to  find the matching ones for your business.',
    tick: 'Evaluate product quality and supplier capabilities easily and efficiently through verified inspections and digital sourcing tools.',
    swap: 'Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.',
    earth: 'Get your logistics needs fulfilled with customized solutions at the Alibaba.com Logistics Marketplace, with real-time tracking for 26,000+ routes across 220 countries and regions, all powered by Alibaba.com Logistics.',
    user: 'Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via My Alibaba.'
  };

  const handleIconClick = (image, iconId) => {
    setSelectedImage(image);
    setSelectedIcon(iconId);
  };

  return (
    <div className="streamline-container">
      <h1>Streamline ordering from search to <br />
         fulfillment, all in one place</h1>
      <div className="content">
        <div className="icons-lists">
          <div
            onClick={() => handleIconClick('/screenshort1.png', 'search')}
            className={`icon-container ${selectedIcon === 'search' ? 'active' : ''}`}
          >
            <FiSearch className="icon-items" />
            {selectedIcon === 'search' && <p className="icon-text">{iconDescriptions['search']}</p>}
          </div>
          <div
            onClick={() => handleIconClick('/screenshort3.png', 'tick')}
            className={`icon-container ${selectedIcon === 'tick' ? 'active' : ''}`}
          >
            <SiTicktick className="icon-items" />
            {selectedIcon === 'tick' && <p className="icon-text">{iconDescriptions['tick']}</p>}
          </div>
          <div
            onClick={() => handleIconClick('/screenshort4.png', 'swap')}
            className={`icon-container ${selectedIcon === 'swap' ? 'active' : ''}`}
          >
            <AiOutlineSwap className="icon-items" />
            {selectedIcon === 'swap' && <p className="icon-text">{iconDescriptions['swap']}</p>}
          </div>
          <div
            onClick={() => handleIconClick('/screenshort5.png', 'earth')}
            className={`icon-container ${selectedIcon === 'earth' ? 'active' : ''}`}
          >
            <IoEarthSharp className="icon-items" />
            {selectedIcon === 'earth' && <p className="icon-text">{iconDescriptions['earth']}</p>}
          </div>
          <div
            onClick={() => handleIconClick('/screenshort6.png', 'user')}
            className={`icon-container ${selectedIcon === 'user' ? 'active' : ''}`}
          >
            <GrUserManager className="icon-items" />
            {selectedIcon === 'user' && <p className="icon-text">{iconDescriptions['user']}</p>}
          </div>
        </div>
        
        <div className="screenshot-display">
          <img src={selectedImage} alt="Selected screenshot" height="350px" width="350px" />
        </div>
      </div>
    </div>
  );
};

export default Pointer;
