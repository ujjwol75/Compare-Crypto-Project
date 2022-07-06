import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { getApiData } from '../../Helper/Axiosinstance'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
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