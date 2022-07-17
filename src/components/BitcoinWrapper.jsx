import React from 'react';
import LatestNewsBottom from './home/LatestNewsBottom';
import useGetHook from '../customeHooks/useGetHook';
import { APIs } from '../../pages/api/hello';

function BitcoinWrapper() {
    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
  return (
    <div className="BitcoinWrapper container">
     <LatestNewsBottom postsData={postsData}/>
    </div>
  )
}

export default BitcoinWrapper;