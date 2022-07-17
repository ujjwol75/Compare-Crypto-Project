import React, { useEffect, useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { getApiData } from '../../Helper/Axiosinstance'
import axios from 'axios'

const Layout = ({children}) => {
  const [headerData, setHeaderData] = useState();
  const [nuCoinData, setNuCoinData] = useState();

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,SOL,XRP,DOGE&tsyms=USD`;

  const getHeaderData = async () => {
    await axios.get(url)
      .then((response) => {
        const data = response.data;
        setHeaderData(data)
      })
  }

  useEffect(() => {
    getHeaderData();
  }, []);

  //For Nu-coin
  const nuCoinUrl = `https://insidecrypto.news/api/nu-coin/`;

  const getNuCoinData = async () => {
    await axios.get(nuCoinUrl)
      .then((response) => {
        const data = response.data;
        setNuCoinData(data)
      })
  }

  useEffect(() => {
    getNuCoinData();
  }, []);


  return (
    <>
      <Header
        headerData={headerData}
        nuCoinData={nuCoinData}
      />
    <Navbar/>
    {children}
    <Footer/>
     
    </>
  )
}

export default Layout

export async function getServerSideProps({ params }) {
  const url = APIS.posts;
  const posts = await getApiData(url);
  return {
    props: {
      posts: posts?.data,
    }, // will be passed to the page component as props
  };
}