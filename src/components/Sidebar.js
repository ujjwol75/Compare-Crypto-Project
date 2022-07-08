import React, { useState } from 'react'
import Sidelist from './sidebarcontent/Sidelist';
import {AiOutlineDown, AiOutlineRight} from 'react-icons/ai'
import Link from 'next/link';

const Sidebar = () => {
  const [show,setShow] = useState(false)
  return (
    <>
      <ul className="sidebar-ul">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/news">
          <li>News</li>
        </Link>
        <li>Research</li>
        <Link href="/postarticle">
          <li>Post Article</li>
        </Link>
        <li>NFT</li>
        <li>Live Market</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Sidebar