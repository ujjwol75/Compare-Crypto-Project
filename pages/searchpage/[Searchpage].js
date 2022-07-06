import React, { useState } from "react";
import Header from "../../src/components/Header";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import LatestNews from "../../src/components/LatestNews";
import { FaSearch } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../../CustomHooks/useGetHooks";
import { APIS } from "../api/hello";
import { useRouter } from "next/router";

const Searchpage = () => {
  const [keyword, setKeyword] = useState(" ");

  const { isLoading: navigationLoading, data: postData } = useGetHook({
    queryKey: "postData",
    url: APIS.posts,
  });
  console.log("Postdata", postData?.results);

  const router = useRouter();
  console.log("Router-query:", router.query);
  const { Searchpage } = router.query;
  console.log("Singlepage", Searchpage);

  const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
    queryKey: `singlePostsData-${Searchpage}`,
    url: `${APIS.posts}?search=${Searchpage}`,
  });
  // {curElem?.slice(0,5)}
  console.log("singlepostdata", singlePostsData);

  const onclickHandler = (e) => {
    e.preventDefault();
    if (keyword !== " ") {
      router.push(`/searchpage/${keyword}`);
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
              {singlePostsData?.results.map((curElem, key) => (
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
