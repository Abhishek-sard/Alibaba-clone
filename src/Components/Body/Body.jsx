import React from 'react'
import './Body.css'
import { FaSearch } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";



export const Body = () => {
  return (
    <>
      <div className="background">
        <img src="./public/background.jpg" alt="" />
        <div className="text">
            <h4 className='info-heading'><SiYoutubemusic />
            Learn about Alibaba.com</h4>
          <h1>The leading B2B ecommerce platform for global trade</h1>
          <button className='search-button'><FaSearch />
          Search</button> {/* Add button here */}
        </div>
      </div>
    </>
  )
}

