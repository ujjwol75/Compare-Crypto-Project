import React from 'react';
import Link from 'next/link';
import useGetHook from '../../customeHooks/useGetHook';
import { APIs } from '../../../pages/api/hello';

function SingleDetailRightCards() {
    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
    // console.log("abcd",postsData?.result);
  return (
    <>
    {postsData?.results?.slice(0,15)?.map((item, key) =>
    <Link href={`/singlepages/${item.slug}`} key={key}>
     <div className='SingleDetailsideimage-holder'>
       <img src={item.image}/>
     </div>
     </Link>
    )} 
    </>
  )
}

export default SingleDetailRightCards