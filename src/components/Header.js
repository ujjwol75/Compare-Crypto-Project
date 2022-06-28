import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImCrop, ImCross, ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import Sidebar from "./Sidebar";
import Sidebarwrapper from "./sidebarcontent/Sidebarwrapper";

const Header = () => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [change,setChange] = useState(false);

  const handleClick = () => {
    setChange(!change);setSidebar(!sidebar);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="header-inner1">
          <span>Press release</span>
          <span>Press release</span>
          <span>Press release</span>
        </div>
        <div className="header-inner2">
          <div>
            <span>BTC: $20,788.53</span>
            <span>BTC: $20,788.53</span>
            <span>BTC: $20,788.53</span>
            <span>BTC: $20,788.53</span>
            <span>BTC: $20,788.53</span>
          </div>
          <div className="header-logo">Logo</div>
        </div>
      </div>
      <div className="banner">
        <img src="https://servedbyadbutler.com/getad.img/;libID=3384544" />
      </div>

      <div className="sub-header">
        <div className="header-socialmedia">
          <ImFacebook className="icons" />
          <BsTwitter className="icons" />
          <FaTelegramPlane className="icons" />
          <ImFacebook className="icons" />
        </div>
        {
          change? <ImCross onClick={handleClick}/>  : <GiHamburgerMenu className="navmenu" onClick={handleClick} /> 
        }
        {/* <GiHamburgerMenu className="navmenu" onClick={handleClick} /> */}
        {sidebar && <Sidebarwrapper/>}
        <div className="bitcoinlogo">
          <img
            className="bitcoinlogo-image"
            src="https://bitcoinist.com/wp-content/uploads/2021/04/Logo-min.png"
          />
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
    </>
  );
};

export default Header;
