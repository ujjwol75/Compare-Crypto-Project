import React from 'react';
import useGetHook from '../../CustomHooks/useGetHooks';
import { APIS } from '../../pages/api/hello';

const Sideimage = () => {
  const { isLoading:postsLoading, data: postsData } = useGetHook(
    {
        queryKey: 'postsData',
        url: APIS?.posts
    }
);
  return (
    <>
    {postsData?.results?.slice(0,6)?.map((item, key) => (
     <div className='sideimage-holder'>
       <img src={item.image}/>
     </div>
    )
    )}
    </>
  )
}

export default Sideimage