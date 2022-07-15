import Head from 'next/head';
import React from 'react';
import { APIs } from '../api/hello';
import { getApiData } from "../../src/helper/AxiosInstance";
import SearchPageWrapper from '../../src/components/searchpage/SearchPageWrapper';

function SearchPage(props) {
    // console.log("propsearxh",props)
  return (
    <>
      <Head>
        <title>CryptoCompare - Search</title>
        <link rel="shortcut icon" type="image/x-icon" href="compare.png" />
      </Head>
      <SearchPageWrapper data={props?.searchPageData} />
    </>
  )
}

export default SearchPage;

export async function getServerSideProps({ params }) {
  const { SearchPage } = params
  const url = `${APIs.posts}?search=${SearchPage}`
  const searchPageData = await getApiData(url)
  return {
    props: {
      searchPageData: searchPageData?.data
    }, // will be passed to the page component as props
  }
}