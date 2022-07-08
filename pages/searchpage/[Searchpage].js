import React, { useState } from "react";
import Header from "../../src/components/Header";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import LatestNews from "../../src/components/LatestNews";
import { FaSearch } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../../CustomHooks/useGetHooks";
import { APIS } from "../api/hello";
import { getApiData } from "../../Helper/Axiosinstance";
import { useRouter } from "next/router";

const Searchpage = (props) => {
  console.log(props,"search data");
  const [keyword, setKeyword] = useState(" ");


  const router = useRouter();
  const { Searchpage } = router.query;


  const onclickHandler = (e) => {
    e.preventDefault();
    if (keyword !== " ") {
      router.push(`/searchpage/${Searchpage}`);
    }
  };

  return (
    <>
      <div className="search-page-wrapper">
        <div className="search-page-latest-news-sticker">
          <div>
            <h4>
              <b>Search Result For {Searchpage}</b>
            </h4>
            <div className="search-page-input-field">
              <div className="search-page-input-wrapper">
                <input
                  className="search-page-input"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="search-icon-wrapper" onClick={onclickHandler}>
                  <FaSearch className="search-icon" />
                </div>
              </div>
            </div>
            <div className="search-page-latest-news">
              {props?.searchPost?.results?.map((curElem, key) => (
                <LatestNews
                  key={key}
                  image={curElem.image}
                  title={curElem.title}
                  author={curElem.author}
                  created={curElem.created}
                />
              ))}
            </div>
          </div>
          <div className="search-page-sticker">
            <img
              className="search-page-sticker-image"
              src="https://servedbyadbutler.com/getad.img/;libID=844192"
            />
            <img
              className="search-page-sticker-image"
              src="https://servedbyadbutler.com/getad.img/;libID=844192"
            />
            <img
              className="search-page-sticker-image"
              src="https://servedbyadbutler.com/getad.img/;libID=844192"
            />
            <img
              className="search-page-sticker-image"
              src="https://servedbyadbutler.com/getad.img/;libID=844192"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchpage;

export async function getServerSideProps({ params }) {
  const { Searchpage } = params;
  const url = `${APIS.posts}?search=${Searchpage}`;
  const searchPost = await getApiData(url);
  // console.log("https://insidecrypto.news/api/posts/?search=Web3","backend");
  // console.log(`${APIS.posts}${Searchpage}`,"timro");
  return {
    props: {
      searchPost: searchPost?.data,
    }, // will be passed to the page component as props
  };
}

