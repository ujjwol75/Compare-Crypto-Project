import React from 'react'
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper-container">
        <div className="footer-wrapper">
          <div className="footer-wrapper-inner">
            <img
              className="footer-image"
              src="https://bitcoinist.com/wp-content/uploads/2021/04/Logo-1@2x-min-1.png"
            />
            <span className='footerspan'>
              Bitcoin news portal providing breaking news, guides, price
              analysis about decentralized digital money & blockchain
              technology.
            </span>
            <div className="footer-inner1">
              <ImFacebook className='footer-icon'/>
              <BsTwitter className='footer-icon'/>
              <FaTelegramPlane className='footer-icon'/>
              <ImFacebook className='footer-icon'/>
            </div>
          </div>
          <div className="footer-list">
            <b>BITCOIN</b>
            <ul className="footer-ul">
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
            </ul>
          </div>
          <div className="footer-list">
            <b>ALTCOIN</b>
            <ul className="footer-ul">
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
            </ul>
          </div>
          <div className="footer-list">
            <b>CATEGORIES</b>
            <ul className="footer-ul">
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
              <li>News</li>
              <li>Price</li>
              <li>Business</li>
            </ul>
          </div>
          <div className="footer-list">
            <b>PAGES</b>
            <ul className="footer-ul">
              <li>Contact us</li>
              <li>Ediorial Policy</li>
              <li>Advertise</li>
              <li>Crypto prices from nomics</li>
            </ul>
          </div>
        </div>
        <div className="footer-last">
          <p className="footer-p">
            This website uses cookies. By continuing to use this website you are
            giving consent to cookies being used. Visit our{" "}
            <span className='footer-span'>Privacy Center</span> or <span className='footer-span'>Cookie Policy</span>.
          </p>
          <button className="footer-bottom">I Agree</button>
        </div>
      </div>
    </>
  );
}

export default Footer