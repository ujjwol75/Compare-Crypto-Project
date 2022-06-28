import React from 'react'
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Sidebar from '../Sidebar';


const Sidebarwrapper = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <Sidebar />
          <Sidebar />
          <Sidebar />
          <Sidebar />
          <Sidebar />
          <Sidebar />
          <p className="sidebar-p">Play Game</p>
          <p Sidebar-p>BIT&WIN</p>
        </div>
        <div>
          <ImFacebook className="icons" />
          <BsTwitter className="icons" />
          <FaTelegramPlane className="icons" />
          <ImFacebook className="icons" />
          <p className="sidebar-last-p">
            © 2021 Bitcoinist. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebarwrapper