import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ImFacebook, ImCross } from 'react-icons/im';
import { BiMenu } from 'react-icons/bi';
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane, FaWifi } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import useGetHook from '../customeHooks/useGetHook';
import { APIs } from '../../pages/api/hello';

function Header() {
    const [showNav, setshowNav] = useState(false);
    const [showSearch, setshowSearch] = useState(false);
    const [name, setName] = useState("");
    const router = useRouter();

    const { isLoading: bannerImageLoading, data: bannerImageData } = useGetHook(
        {
            queryKey: 'bannerImageData',
            url: APIs?.bannerImage
        }
    );

    function HandleSubmit(e) {
        e.preventDefault();
        router.push(`/searchPage/${name}`);
        setName("");
    }
    return (
        <>
            <div className="headerTopWrapper container-fluid">
                <div className="headerTopWrapper-left">
                    <ul>
                        <li>Press Releases</li>
                        <li>Advertise</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="headerTopWrapper-right">
                    <ul>
                        <li> <b>BTC:</b> $20,328.51</li>
                        <li> <b>ETH:</b> $1,165.8</li>
                        <li> <b>DOGE:</b> $0.07</li>
                        <li> <b>XRP:</b> $0.33</li>
                        <li> <b>CRO:</b> $0.12</li>
                        <li>
                            <div className="header-logo">
                                <img className="header-logo-image" src="https://bitcoinist.com/wp-content/uploads/2021/05/cryptocom-logo.png" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="headerBottomWrapper container">

                <div className="bannerImage">
                    <img src={bannerImageData?.results[0]?.image} />
                </div>
                <div className="headerBottom">
                    <div className="socialmediaIcons">
                        <ul>
                            <li><ImFacebook /></li>
                            <li><BsTwitter /></li>
                            <li><FaTelegramPlane /></li>
                            <li><FaWifi /></li>
                        </ul>
                    </div>
                    <Link href="/">
                        <div className="bitcointlogoImage">
                            <img src="https://bitcoinist.com/wp-content/uploads/2021/04/Logo-min.png" alt="" />
                        </div>
                    </Link>
                    <button className='searchbutton'>
                        {showSearch ? <ImCross onClick={() => setshowSearch(!showSearch)} /> :
                            <FaSearch className='search' onClick={() => setshowSearch(!showSearch)} />}
                    </button>

                    {/* for search input */}
                    <div className={showSearch ? "searchInputOn" : "searchInputoff"}>
                        <form onSubmit={HandleSubmit}>
                            <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                            <button className='searchbutton' type='submit' style={{ "color": "#C4B4AC" }}>
                                <FaSearch className='search' /></button>
                        </form>
                    </div>
                    {/* for seach input ends here */}
                </div>
            </div>
            <div className="navbar container-fluid">
                <div className={showNav ? "mobile-menu" : "n-list"}>
                    <ul>
                        <li>
                            <Link href="/bitcoin">
                                BITCOIN
                            </Link>
                            <MdKeyboardArrowDown />
                        </li>
                        <li>
                            <Link href="">
                                ALTCOIN
                            </Link>
                            <MdKeyboardArrowDown />
                        </li>
                        <li><Link href="">TECH</Link>
                            <MdKeyboardArrowDown /></li>
                        <li><Link href="">INDUSTRY</Link>
                            <MdKeyboardArrowDown /></li>
                        <li><Link href="">PRICE</Link>
                            <MdKeyboardArrowDown /></li>
                        <li><Link href="">HOW TO</Link>
                            <MdKeyboardArrowDown /></li>
                        <li><Link href="/contact">CONTACT US</Link>
                            <MdKeyboardArrowDown /></li>
                    </ul>
                    <span className='mobileMenuCross' onClick={() => setshowNav(!showNav)}><ImCross /></span>
                </div>
                
            </div>
            {/* navigation bar for mobile */}
            <div className="mobileNavbar container-fluid">
                    <div className="hamburger" onClick={() => setshowNav(!showNav)}>
                        <BiMenu />
                    </div>
                    <Link href="/">
                    <div className="bitcointlogoImage">
                        <img src="https://bitcoinist.com/wp-content/uploads/2021/04/Logo-1@2x-min-1.png" alt="" />
                    </div>
                    </Link>
                    <button className='searchbutton'>
                        {showSearch ? <ImCross onClick={() => setshowSearch(!showSearch)} /> :
                            <FaSearch className='search' onClick={() => setshowSearch(!showSearch)} />}
                    </button>

                    {/* for search input */}
                    <div className={showSearch ? "searchInputOn" : "searchInputoff"}>
                        <form onSubmit={HandleSubmit}>
                            <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                            <button className='searchbutton' type='submit' style={{ "color": "#C4B4AC" }}>
                                <FaSearch className='search' /></button>
                        </form>
                    </div>
                    {/* for seach input ends here */}
                </div>
                {/* navigation bar for mobile ends here */}
        </>
    )
}

export default Header;