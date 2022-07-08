import React from 'react'
import useGetHook from '../../CustomHooks/useGetHooks'
import { FaAngleDown } from 'react-icons/fa'
import { APIS } from '../../pages/api/hello';
import Link from 'next/link';

const Navbar = () => {
  const { isLoading: navigationLoading, data: navigationListData } = useGetHook(
    {
      queryKey: 'navigationListData',
      url: APIS.navigation,
    }
  );
  console.log(navigationListData);
  
  return (
    <>
      <div className="navbar">
        <ul className="navbar-ul">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/news">
            <li>News</li>
          </Link>
          <li>Research</li>
          <li>Post Article</li>
          <li>NFT</li>
          <li>Live Market</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar
