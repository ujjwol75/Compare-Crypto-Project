import React,{useEffect, useState} from 'react'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'
import RecentNews from '../src/components/RecentNews'
import LatestNews from '../src/components/LatestNews'
import Premiumpartner from '../src/components/Premiumpartner'
import Premiumcasino from '../src/components/Premiumcasino'
import Topbroker from '../src/components/Topbroker'
import Topcasino from '../src/components/Topcasino'
import Pressrelease from '../src/components/Pressrelease'


import Footer from '../src/components/Footer'
import Link from 'next/link'


import 'bootstrap/dist/css/bootstrap.css'
import useGetHook from '../CustomHooks/useGetHooks'
import { APIS } from './api/hello';

const Index = () => {
  const [firstrowdata,setFirstRowData] = useState([])

  const { isLoading: navigationLoading, data: postData } = useGetHook(
    {
      queryKey: "postData",
      url: APIS.posts,
    }
  );
  console.log(postData);
  // let data = []
  // postData?.result?.map((curElem,index)=>{
  //   if (index > 2){

  //   }
  //   else{
  //     data.push(curElem)
  //   }
  // })
  // setFirstRowData(data)
  // console.log("Data:",data);

      let data = [];

  useEffect(()=>{
    // let data = [];
    postData?.result?.map((curElem, index) => {
      if (index > 2) {
        console.log("More than two data");
      } else {
        data.push(curElem);
        console.log("DAta:",data);
      }
    });
    setFirstRowData(data);
    console.log("Data:", data);
  },[postData])

  console.log("Firstrowdata:",firstrowdata);

  return (
    <>
      <Header />
      <Navbar />
      <div className="recent-news-wrapper">
        <RecentNews />
        <RecentNews />
        <RecentNews />
      </div>
      <div className='banner'>
        <img src='https://servedbyadbutler.com/getad.img/;libID=3393246'/>
      </div>
      <div className='latest-news-topics'>
        <p><b>Latest News</b></p>
        <hr className='latest-news-topics-hr'/>
      </div>
      <div className="latest-news-outer">
        <div className="latest-news-first-row">
          {
            firstrowdata?.map((curElem,key)=>{
              return(
                <>
                  <LatestNews key={key} title={curElem?.title} image={curElem?.image} description={curElem?.description} author={curElem?.author} created={curElem?.created} id={curElem.id}/>
                </>
              )
            })
          }
        </div>

        <div className='premium'>
            {/* <LatestNews title={postData?.results?.title} image={postData?.results?.image} author={postData?.results?.author} created={postData?.results?.created}/> */}
          <hr />
          <div>
            <b>Premium Partners</b>
            <Premiumpartner />
          </div>
          <hr />
          <div>
            <b>Premiun Casino Partners</b>
            <Premiumcasino />
          </div>
          <hr />
          <div>
            <b>Top Brokers</b>
            <Topbroker />
          </div>
          <hr />
          <div>
            <b>Top Casino</b>
            <Topcasino />
          </div>
          <hr />
          <div>
            <b>Press Releases</b>
            <Pressrelease />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index