import React from 'react';
import Head from 'next/head';
import BitcoinWrapper from '../src/components/BitcoinWrapper';

function bitcoin() {
  return (
    <>
      <Head>
        <title>CryptoCompare - Bitcoin</title>
        <link rel="shortcut icon" type="image/x-icon" href="compare.png" />
      </Head>
      <BitcoinWrapper />
    </>
  )
}

export default bitcoin;