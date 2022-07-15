import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane, FaWifi } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footerTopWrapper container">
                <div className="footerTop">
                    <div className="footerToplist">
                        <div className="bitcointlogoImage">
                            <img src="https://bitcoinist.com/wp-content/uploads/2021/04/Logo-1@2x-min-1.png" alt="" />
                        </div>
                        <span className='footerspan small-text'>
                            Bitcoin news portal providing breaking news, guides, price
                            analysis about decentralized digital money & blockchain
                            technology.
                        </span>
                        <div className="socialmediaIcons">
                            <ul>
                                <li><ImFacebook /></li>
                                <li><BsTwitter /></li>
                                <li><FaTelegramPlane /></li>
                                <li><FaWifi /></li>
                            </ul>
                        </div>

                    </div>
                    <div className="footerToplist">
                        <h2>BITCOIN</h2>
                        <ul className="footer-ul small-text">
                            <li>News</li>
                            <li>Price</li>
                            <li>Business</li>
                            <li>Acceptance</li>
                            <li>Technology</li>
                            <li>Investment</li>
                            <li>Regulation</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className="footerToplist">
                        <h2>ALTCOIN</h2>
                        <ul className="footer-ul small-text">
                            <li>News</li>
                            <li>Price</li>
                            <li>Ethereum</li>
                            <li>Ripple</li>
                            <li>Litecoin</li>
                            <li>EOS</li>
                            <li>NAGA</li>
                        </ul>
                    </div>
                    <div className="footerToplist">
                        <h2>CATEGORIES</h2>
                        <ul className="footer-ul small-text">
                            <li>Blockchain</li>
                            <li>Security</li>
                            <li>FinTech</li>
                            <li>Technology</li>
                            <li>Trending</li>
                            <li>Breking News</li>
                            <li>Press releases</li>
                            <li>How to</li>
                        </ul>
                    </div>
                    <div className="footerToplist">
                        <h2>PAGES</h2>
                        <ul className="footer-ul small-text">
                            <li>Contact us</li>
                            <li>Ediorial Policy</li>
                            <li>Advertise</li>
                            <li>Crypto prices from nomics</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footerBottomWrapper container-fluid">
                <p className="small-text">
                    This website uses cookies. By continuing to use this website you are
                    giving consent to cookies being used. Visit our{" "}
                    <span className='blue-text'>Privacy Center</span> or <span className='blue-text'>Cookie Policy</span>.
                    <button className="footer-bottom">I Agree</button>
                </p>
            </div>
        </>
    )
}

export default Footer