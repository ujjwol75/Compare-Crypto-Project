import React from 'react'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'
import LatestNews from '../src/components/LatestNews'

const Navigation = () => {
  return (
    <>
     <div>
        <Header/>
        <Navbar/>
        <LatestNews/>
     </div>
    </>
  )
}

export default Navigation