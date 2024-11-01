import React from "react";
import "./Body.css";
import { FaSearch } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export const Body = () => {
  return (
    <>
      <div className="background">
        <img src="/background.jpg" alt="" />
        <div className="text">
          <h4 className="info-heading">
            <SiYoutubemusic />
            Learn about Alibaba.com
          </h4>
          <h1>The leading B2B ecommerce platform for global trade</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search.... "
              className="search-input"
            />

            <button className="search-button">
              <FaSearch />
              Search
            </button>
          </div>
            <h6 className="glass">
             Frequently searched:
                <button className="search-button1">i phone 14 pro max</button>
                <button className="search-button1">samsung 1+ plus</button>
                <button className="search-button1">Android Based</button>
            </h6>
        </div>
      </div>
    </>
  );
};
