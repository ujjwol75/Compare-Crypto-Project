import React from 'react';
import Link from 'next/link';
import LatestNewsBottomRight from './LatestNewsBottomRight';
import LatestNewsCard from './LatestNewsCard';

function LatestNewsBottom({ postsData }) {
    return (
        <div className="LatestNewsBottom">
            <div className="LatestNewsBottom-left">
                {postsData?.results?.slice(6, 20).map((item, key) =>
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
            <div className="LatestNewsBottom-right">
                <LatestNewsBottomRight postsData={postsData} />
            </div>
        </div>
    )
}

export default LatestNewsBottom