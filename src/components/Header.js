import React, { useState } from "react";
import { ImCrop, ImCross, ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane, FaWifi } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'

import Sidebar from "./Sidebar";
import Sidebarwrapper from "./sidebarcontent/Sidebarwrapper";
import { useRouter } from "next/router";


const Header = (props) => {

  const { headerData, nuCoinData } = props;
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState(false)
  const [keyword, setKeyword] = useState('');

  const router = useRouter()

  const handleClick = () => {
    setChange(!change); setSidebar(!sidebar);
  };

  const iconClick = () => {
    setSearch(!search)
    console.log("Button click");
  }

  const onclickHandler = (e) => {
    e.preventDefault();
    if (keyword !== '') {
      router.push(`/searchpage/${keyword}`);
    }
  }

  return (
    <>
      <div className="header-wrapper container">
        <div className="header-inner1">
          <span>Press Releases</span>
          <span>Advertise</span>
          <span>Contact us</span>
        </div>
        <div className="header-inner2">
          <div className="header-inner2-data">
            <span>
              <b>BTC:</b> {`$${headerData?.RAW?.BTC?.USD?.PRICE}`}
            </span>
            <span>
              <b>ETH:</b> {`$${headerData?.RAW?.ETH?.USD?.PRICE}`}
            </span>
            <span>
              <b>DOGE:</b> {`$${headerData?.RAW?.DOGE?.USD?.PRICE}`}
            </span>
            <span>
              <b>XRP:</b> {`$${headerData?.RAW?.XRP?.USD?.PRICE}`}
            </span>
            <span>
              <b>SOL:</b> {`$${headerData?.RAW?.SOL?.USD?.PRICE}`}
            </span>
            {nuCoinData?.results?.map((item, key) => (
            <span key={key}>
              <b>{item?.name}:</b> {item?.price_rate}
              </span>
               ))}
          </div>
          <div className="header-logo">
            <img className="header-logo-image" src="https://bitcoinist.com/wp-content/uploads/2021/05/cryptocom-logo.png" />
          </div>
        </div>
      </div>
      <div className="banner container">
        <div className="bannerImgholder">
          <img src="https://servedbyadbutler.com/getad.img/;libID=979658" />
        </div>
      </div>

      <div className="sub-header container">
        <div className="header-socialmedia">
          <ImFacebook className="icons" />
          <BsTwitter className="icons" />
          <FaTelegramPlane className="icons" />
          <FaWifi className="icons" />
        </div>
        {change ? (
          <ImCross onClick={handleClick} />
        ) : (
          <GiHamburgerMenu className="navmenu" onClick={handleClick} />
        )}
        {/* <GiHamburgerMenu className="navmenu" onClick={handleClick} /> */}
        {sidebar && <Sidebarwrapper />}
        <div className="bitcoinlogo" onClick={() => router.push("/")}>
          <img
            className="bitcoinlogo-image"
            src="https://bitcoinist.com/wp-content/uploads/2021/04/Logo-min.png"
          />
        </div>
        <div className="search-icon">
          {search ? (
            <ImCross onClick={iconClick} />
          ) : (
            <FaSearch onClick={iconClick} />
          )}
          {search && (
            <div>
              <div className="search-input-wrapper">
                <input
                  placeholder="Search..."
                  className="search-input-box"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  searchtext={keyword}
                  onClick={onclickHandler}
                />
                <FaSearch
                  className="input-search-icon"
                  onClick={onclickHandler}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
