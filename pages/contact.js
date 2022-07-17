import Head from 'next/head';
import React from 'react';
import ContactWrapper from '../src/components/contact/ContactWrapper';

function contact() {
  return (
    <>
     <Head>
        <title>CryptoCompare - Contact</title>
        <link rel="shortcut icon" type="image/x-icon" href="compare.png" />
      </Head>
        <ContactWrapper/>
    </>
  )
}

export default contact;