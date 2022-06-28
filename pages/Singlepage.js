import React from 'react'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import MainCard from '../src/components/MainCard'
import Content from '../src/components/Content'
import SocialMedia from '../src/components/SocialMedia'
import Newsletter from '../src/components/Newsletter'
import Author from '../src/components/Author'
import Recentpost from '../src/components/Recentpost'
import Sideimage from '../src/components/Sideimage'
import {useRouter} from 'next/router'

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../CustomHooks/useGetHooks";
import { APIS } from "./api/hello";

const Singlepage= (props) => {
  const { isLoading: navigationLoading, data: postData } = useGetHook({
    queryKey: "postData",
    url: APIS.posts,
  });
  // const router = useRouter();
  // const curElem = router.query.curElem

  // console.log(curElem);


  
  
  return (
    <>
      <h1>{props.curElem}</h1>
      <Header />
      <Navbar />
      <MainCard />
      <div className="singlepage-wrapper">
        <div className="sinlgepage">
          <Content />
          <SocialMedia />
          <hr className="singlepage-hr" />
          <Newsletter />
          <hr className="singlepage-hr" />
          <Author />
          <div>
            <b>Related Posts</b>
            <hr className="singlepage-hr" />
          </div>
          {/* <hr className="singlepage-hr" /> */}
          <div className="recentpost-wrapper">
            <Recentpost />
            <Recentpost />
            <Recentpost />
            <Recentpost />
            <Recentpost />
            <Recentpost />
          </div>
        </div>
        <div>
          <Sideimage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Singlepage