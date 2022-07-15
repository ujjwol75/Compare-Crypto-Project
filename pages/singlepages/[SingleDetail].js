import React from 'react';
import Head from 'next/head';
import { APIs } from '../api/hello';
import { getApiData } from "../../src/helper/AxiosInstance";
import SingleDetailWrapper from '../../src/components/singleDetail/SingleDetailWrapper';

function SingleDetail(props) {
  return (
    <>
     <Head>
        <title>CryptoCompare - {props?.singlePost?.title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="compare.png" />
      </Head>
     <SingleDetailWrapper  singlePostsData={props?.singlePost}/>
    </>
  )
}

export default SingleDetail;

export async function getServerSideProps({ params }) {
  const { SingleDetail } = params
  const url = `${APIs.posts}${SingleDetail}`
  const singlePost = await getApiData(url)
  return {
    props: {
      singlePost: singlePost?.data
    }, // will be passed to the page component as props
  }
}