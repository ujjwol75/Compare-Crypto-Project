import React from 'react';
import Link from 'next/link';
import ReleaseCards from '../home/ReleaseCards';
import useGetHook from '../../customeHooks/useGetHook';
import { APIs } from '../../../pages/api/hello';

function RelatedPostWrapper() {
    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
    return (
        <div className="RelatedPostWrapper">
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
    )
}

export default RelatedPostWrapper