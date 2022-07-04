import React from 'react'
import Link from 'next/link'
import useGetHook from '../../CustomHooks/useGetHooks'
import { FaAngleDown } from 'react-icons/fa'
import { APIS } from '../../pages/api/hello';


const Navbar = () => {
  // Fetch data in pages.

//get navigations list
  const { isLoading: navigationLoading, data: navigationListData } = useGetHook(
    {
      queryKey: 'navigationListData',
      url: APIS.navigation,
    }
  );
  console.log(navigationListData);
  
  // console.log('aa',navigationListData.results);
  return (
    <>
      <div className='navbar'>
        <ul className="navbar-ul">
          {/* {
            navigationListData?.results?.map((curElem)=>{
              return (
                <>
                  <li>
                    <div className="dropdown" key={curElem.id}>
                      <Link href={`/linkpage/${curElem.id}`}>
                        <button className="dropbtn">
                          {curElem.title}
                          <FaAngleDown />
                        </button>
                      </Link>
                    </div>
                  </li>
                  <li className="navbar-list">BET&WIN</li>
                </>
              );
            })
          } */}
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