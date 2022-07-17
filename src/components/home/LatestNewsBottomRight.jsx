import React from 'react';
import Link from 'next/link';
import PremiumClassCards from './premiumClassCards';
import ReleaseCards from './ReleaseCards';
import TopClassCards from './TopClassCards';

function LatestNewsBottomRight({ postsData }) {
   return (
      <>
         <div className="premium premiumclass">
            <h2>Premium Partners</h2>
            <div className="premiumClassCards-wrapper">
               {postsData?.results?.slice(0, 3).map((item, key) => (
                  <Link href={`/singlepages/${item.slug}`} key={key}>
                     <div className="PremiumClassCards">
                        <PremiumClassCards
                           picture={item.image}
                        />
                     </div>
                  </Link>
               )
               )}
            </div>
         </div>
         <div className="Casino premiumclass">
            <h2>Premium Casino Partners</h2>
            <div className="premiumClassCards-wrapper">
               {postsData?.results?.slice(3, 8).map((item, key) => (
                  <Link href={`/singlepages/${item.slug}`} key={key}>
                     <div className="PremiumClassCards">
                        <PremiumClassCards
                           picture={item.image}
                        />
                     </div>
                  </Link>
               )
               )}
            </div>
         </div>
         <div className="topBrokers premiumclass">
            <h2>Top Brokers</h2>
            <div className="premiumClassCards-wrapper">
               {postsData?.results?.slice(0, 2).map((item, key) => (
                  <Link href={`/singlepages/${item.slug}`} key={key}>
                     <div className="TopClassCards">
                        <TopClassCards
                           picture={item.image}
                        />
                     </div>
                  </Link>
               )
               )}
            </div>
         </div>
         <div className="topCasinos premiumclass">
            <h2>Top Casinos</h2>
            <div className="premiumClassCards-wrapper">
               {postsData?.results?.slice(2, 6).map((item, key) => (
                  <Link href={`/singlepages/${item.slug}`} key={key}>
                     <div className="TopClassCards">
                        <TopClassCards
                           picture={item.image}
                        />
                     </div>
                  </Link>
               )
               )}
            </div>
         </div>
         <div className="pressReleases premiumclass">
            <h2>Press Releases</h2>
            <div className="premiumClassCards-wrapper">
               {postsData?.results?.map((item, key) => (
                  <Link href={`/singlepages/${item.slug}`} key={key}>
                     <div className="ReleaseCards">
                        <ReleaseCards
                           picture={item.image}
                           title={item.title}
                           date={item.created}
                        />
                     </div>
                  </Link>
               )
               )}
            </div>
         </div>
      </>
   )
}

export default LatestNewsBottomRight;