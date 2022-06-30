import React from 'react'
import Header from '../../src/components/Header'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import { FaSearch } from 'react-icons/fa'

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../../CustomHooks/useGetHooks";
import { APIS } from "../api/hello";
import { useRouter } from 'next/router'


const Searchpage = () => {

   const { isLoading: navigationLoading, data: postData } = useGetHook({
     queryKey: "postData",
     url: APIS.posts,
   });
   console.log("Postdata", postData?.results);

   const router = useRouter();
   console.log("Router-query:",router.query);
   const { Singlepage } = router.query;
   console.log("Singlepage", Singlepage);

   const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
     queryKey: `singlePostsData-${Singlepage}`,
     url: `${APIS.posts}${Singlepage}`,
   });
   // {curElem?.slice(0,5)}
   console.log("singlepostdata", singlePostsData);
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h4>
          <b>Search Result For"</b>
        </h4>
        <div className="search-page-input-field">
          <div className="search-page-input-wrapper">
            <input className="search-page-input" />
            <div className='search-icon-wrapper'>
              <FaSearch className="search-icon" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchpage