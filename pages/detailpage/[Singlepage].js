import React from "react";
import MainCard from "../../src/components/MainCard";
import Content from "../../src/components/Content";
import SocialMedia from "../../src/components/SocialMedia";
import Newsletter from "../../src/components/Newsletter";
import Author from "../../src/components/Author";
import Sideimage from "../../src/components/Sideimage";
import { APIS } from "../api/hello";
import { getApiData } from "../../Helper/Axiosinstance";
import RecentPostWrapper from "../../src/components/RecentPostWrapper";

const Singlepage = (props) => {
  console.log("props",props?.singlePost);
  return (
    <>
      <MainCard singlepagedata={props?.singlePost} />
      <div className="singlepage-wrapper container">
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
           <RecentPostWrapper/>
        </div>
        <div className="singlepage-sideimage">
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
