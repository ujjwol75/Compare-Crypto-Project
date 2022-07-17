import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LatestNewsCard from '../home/LatestNewsCard'
import SingleDetailRightCards from '../singleDetail/SingleDetailRightCards';

function SearchPageWrapper({ data }) {
    const router = useRouter();
    console.log("abcd", router?.query?.SearchPage);
    return (
        <div className="searchPage container">
            <div className="searchPageLeft">
                <h3 className='searchTitle'>Search Results For {router?.query?.SearchPage} </h3>
                {data?.results?.slice(6, 20).map((item, key) =>
                    <Link href={`/singlepages/${item.slug}`} key={key}>
                        <div className="LatestNewsCard">
                            <LatestNewsCard
                                picture={item.image}
                                title={item.title}
                                description={item.description}
                                author={item.author}
                                time={item.created}
                            />
                        </div>
                    </Link>
                )}
            </div>
            <div className="searchPageRight">
              <SingleDetailRightCards/>
            </div>
        </div>
    )
}

export default SearchPageWrapper;