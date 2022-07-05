import React from 'react'
import Header from '../../src/components/Header'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import MainCard from '../../src/components/MainCard'
import Content from '../../src/components/Content'
import SocialMedia from '../../src/components/SocialMedia'
import Newsletter from '../../src/components/Newsletter'
import Author from '../../src/components/Author'
import Recentpost from '../../src/components/Recentpost'
import Sideimage from '../../src/components/Sideimage'
import {useRouter} from 'next/router'

import "bootstrap/dist/css/bootstrap.css";
import useGetHook from "../../CustomHooks/useGetHooks";
import { APIS } from "../api/hello";

const Singlepage= (props) => {
  const { isLoading: navigationLoading, data: postData } = useGetHook({
    queryKey: "postData",
    url: APIS.posts,
  });
  console.log('Postdata',postData?.results)
  // const router = useRouter();
  // const curElem = router.query.curElem

  // console.log(curElem);

const router = useRouter();
const { Singlepage } = router.query;
console.log("Singlepage", Singlepage);

const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
  queryKey: `singlePostsData-${Singlepage}`,
  url: `${APIS.posts}?search=${Singlepage}`,
});
// {curElem?.slice(0,5)}
console.log(`${APIS.posts}?search=${Singlepage}`);
console.log("singlepostdata", singlePostsData);


  
  
  return (
    <>
    {/* {
      singlePostsData?.results
    } */}
      <h1>{props.curElem}</h1>
      <MainCard image={singlePostsData?.image} title={singlePostsData?.title} author={singlePostsData?.author} created={singlePostsData?.created}/>
      <div className="singlepage-wrapper">
        <div className="sinlgepage">
          <Content content={singlePostsData?.content}/>
          <SocialMedia />
          <hr className="singlepage-hr" />
          <Newsletter />
          <hr className="singlepage-hr" />
          <Author />
          <div className='related-post-text'>
            <b>Related Posts</b>
            <hr className="singlepage-hr" />
          </div>
          {/* <hr className="singlepage-hr" /> */}
          <div className="recentpost-wrapper">
            {
              postData?.results?.map((curElem,key)=>{
                return(
                  <>
                   <Recentpost key={key} image={curElem.image} title={curElem.title} created={curElem.created}/>
                  </>
                )
              })
            }
          </div>
        </div>
        <div>
          <Sideimage />
        </div>
      </div>
    </>
  );
}

export default Singlepage

export function getServerSideProps ({params}){
  console.log(params);

}