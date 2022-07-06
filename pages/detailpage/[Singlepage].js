import React from "react";
import Header from "../../src/components/Header";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import MainCard from "../../src/components/MainCard";
import Content from "../../src/components/Content";
import SocialMedia from "../../src/components/SocialMedia";
import Newsletter from "../../src/components/Newsletter";
import Author from "../../src/components/Author";
import Recentpost from "../../src/components/Recentpost";
import Sideimage from "../../src/components/Sideimage";
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../../CustomHooks/useGetHooks";
import { APIS } from "../api/hello";
import { getApiData } from "../../Helper/Axiosinstance";

const Singlepage = (props) => {
  console.log("props", props.singlePost)
  return (
    <>
      <h1>{props.curElem}</h1>
      <MainCard singlepagedata={props?.singlePost} />
      <div className="singlepage-wrapper">
        <div className="sinlgepage">
          <Content content={props?.singlePost} />
          <SocialMedia />
          <hr className="singlepage-hr" />
          <Newsletter />
          <hr className="singlepage-hr" />
          <Author />
          <div className="related-post-text">
            <b>Related Posts</b>
            <hr className="singlepage-hr" />
          </div>
          <div className="recentpost-wrapper">
            {props?.singlePost?.related_posts?.map((curElem, key) => (
              <Recentpost
                key={key}
                image={curElem.image}
                title={curElem.title}
                created={curElem.created}
              />
            ))}
          </div>
        </div>
        <div>
          <Sideimage />
        </div>
      </div>
    </>
  );
};

export default Singlepage;

export async function getServerSideProps({ params }) {
  const { Singlepage } = params;
  const url = `${APIS.posts}${Singlepage}`;
  const singlePost = await getApiData(url);
  return {
    props: {
      singlePost: singlePost?.data,
    }, // will be passed to the page component as props
  };
}
