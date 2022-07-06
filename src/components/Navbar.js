import React from 'react'
import useGetHook from '../../CustomHooks/useGetHooks'
import { FaAngleDown } from 'react-icons/fa'
import { APIS } from '../../pages/api/hello';

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
      <div className='navbar'>
        <ul className="navbar-ul">
          <li>Home</li>
          <li>News</li>
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
