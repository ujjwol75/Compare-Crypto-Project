import React, { useEffect, useState } from "react";
import RecentNews from "../src/components/RecentNews";
import LatestNews from "../src/components/LatestNews";
import Premiumpartner from "../src/components/Premiumpartner";
import Premiumcasino from "../src/components/Premiumcasino";
import Topbroker from "../src/components/Topbroker";
import Topcasino from "../src/components/Topcasino";
import Pressrelease from "../src/components/Pressrelease";
import { getApiData } from "../Helper/Axiosinstance";

import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../CustomHooks/useGetHooks";
import { APIS } from "./api/hello";

const Index = (props) => {
  const {posts} = props
  
  const [visible,setVisible] = useState(9)

  const showMoreItems = () =>{
    setVisible((prevValue)=>prevValue+4)
  }

  return (
    <>
      <div className="recent-news-wrapper">
        <RecentNews
          image={
            "https://bitcoinist.com/wp-content/uploads/2022/07/bitcoin-miners.jpeg"
          }
        />
        <RecentNews
          image={
            "https://bitcoinist.com/wp-content/uploads/2021/07/china-162389_1280.png"
          }
        />
        <RecentNews className="recent-news-third-content"
          image={
            "https://bitcoinist.com/wp-content/uploads/2022/07/non-fungible-token-g95024f755_1280.png"
          }
        />
      </div>
      <div className="banner">
        <img src="https://servedbyadbutler.com/getad.img/;libID=979658" />
      </div>
      <div className="latest-news-topics">
        <p>
          <b>Latest News</b>
        </p>
        <hr className="latest-news-topics-hr" />
      </div>
      <div className="latestnews-first-three-data">
        {posts?.results?.slice(0, 3)?.map((curElem, key) => (
          <LatestNews
            slug={curElem?.slug}
            image={curElem.image}
            title={curElem.title}
            created={curElem.created}
            author={curElem.author}
          />
        ))}
      </div>
      <div className="latest-news-outer">
        <div className="latest-news-first-row">
          {posts?.results?.slice(3,visible)?.map((curElem, key) => (
            <LatestNews
              key={key}
              slug={curElem?.slug}
              image={curElem?.image}
              title={curElem?.title}
              created={curElem.created}
              author={curElem.author}
            />
          ))}
          <span className="latestnews-load-more" onClick={showMoreItems}>Load More</span>

        </div>

        <div className="premium">
          <hr />
          <div>
            <b>Premium Partners</b>
            <Premiumpartner />
          </div>
          <hr />
          <div>
            <b>Premiun Casino Partners</b>
            <div className="premium-image-wrapper">
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2021/04/BitStarz@2x-min-2.png"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2022/01/punt-casino-logo1.png"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2022/03/Logo_BCGames.png"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2021/12/cryptoslots.jpg"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2022/03/IMAGE-2022-03-04-135412.jpg"
                }
              />
            </div>
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
          <div className="pressrelease-outer">
            <b>Press Releases</b>
            {posts?.results?.slice(0, 7)?.map((curElem, key) => (
              <Pressrelease image={curElem?.image} slug={curElem?.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getServerSideProps({ params }) {
  const url = APIS.posts
  const posts = await getApiData(url);
  return {
    props: {
      posts: posts?.data,
    }, // will be passed to the page component as props
  };
}
