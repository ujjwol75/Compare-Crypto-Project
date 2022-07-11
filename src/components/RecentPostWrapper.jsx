import React from 'react';
import useGetHook from '../../CustomHooks/useGetHooks';
import { APIS } from '../../pages/api/hello';
import Recentpost from './Recentpost';

function RecentPostWrapper(){
  const { isLoading:postsLoading, data: postsData } = useGetHook(
      {
          queryKey: 'postsData',
          url: APIS?.posts
      }
  );

    return(
        <>
        <div className="recentpost-wrapper">
            {postsData?.results?.map((item, key) => (
              <Recentpost
              key={key}
                image={item.image}
                title={item.title}
                created={item.created}
              />
            )
            )}
          </div>
        </>
    )
}

export default RecentPostWrapper;