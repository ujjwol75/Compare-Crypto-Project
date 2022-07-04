import React from 'react'
import Header from "../../src/components/Header";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import LatestNews from '../../src/components/LatestNews';
import Premiumcasino from '../../src/components/Premiumcasino';
import Premiumpartner from '../../src/components/Premiumpartner';
import Topbroker from '../../src/components/Topbroker';
import Topcasino from '../../src/components/Topcasino';
import Pressrelease from '../../src/components/Pressrelease';


import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../../CustomHooks/useGetHooks";
import { APIS } from "../api/hello";


const Navpage = () => {
    const { isLoading: navigationLoading, data: postData } = useGetHook({
      queryKey: "postData",
      url: APIS.posts,
    });
    // console.log(sunuma);

  return (
    <>
      <Header />
      <Navbar />

      <div className="latest-news-outer">
        <div className="latest-news-first-row">
          {postData?.results?.map((curElem, key) => {
            return (
              <>
                {/* <Link href="/Singlepage"> */}
                <LatestNews
                  key={key}
                  title={curElem?.title}
                  image={curElem?.image}
                  description={curElem?.description}
                  author={curElem?.author}
                  created={curElem?.created}
                  id={curElem.id}
                />
                {/* </Link>  */}
              </>
            );
          })}
        </div>

        <div>
          <div>
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
      </div>

      <Footer />
    </>
  );
}

export default Navpage;