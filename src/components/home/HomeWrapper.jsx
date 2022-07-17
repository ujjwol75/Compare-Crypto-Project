import React from 'react';
import Link from 'next/link';
import Hometop from './Hometop';
import LatestNewsCard from './LatestNewsCard';
import useGetHook from '../../customeHooks/useGetHook';
import { APIs } from '../../../pages/api/hello';
import LatestNewsBottom from './LatestNewsBottom';

function HomeWrapper() {
    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
    return (
        <div className="homeWrapper container">
            <div className="hometop-wrapper">
                {postsData?.results?.slice(0, 3)?.map((item, key) =>
                    <Link href={`/singlepages/${item.slug}`} key={key}>
                        <div className="hometop">
                            <Hometop
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
            <div className="bannerImage">
                <img src="https://servedbyadbutler.com/getad.img/;libID=979658" />
            </div>
            <div className="LatestNewsWrapper">
                <div className="LatestNewsHeader">
                    <h2><span>Latest News</span></h2>
                </div>
                <div className="LatestNewsTop">
                    {postsData?.results?.slice(3, 6)?.map((item, key) =>
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
                {/* LatestNewsBottom */}
                <LatestNewsBottom postsData ={postsData }/>
                {/* LatestNewsBottom emds here */}
            </div>
        </div >
    )
}

export default HomeWrapper