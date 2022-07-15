import React from 'react';
import SingleDetailCards from './SingleDetailCards';
import useGetHook from '../../customeHooks/useGetHook';
import { APIs } from '../../helper/AxiosInstance';
import SingleDetailRightCards from './SingleDetailRightCards';
import Newsletter from '../NewsLetter';
import RelatedPostWrapper from './RelatedPostWrapper';


function SingleDetailWrapper({ singlePostsData }) {
  const { isLoading: bannerImageLoading, data: bannerImageData } = useGetHook(
    {
      queryKey: 'bannerImageData',
      url: APIs?.bannerImage
    }
  );
  return (
    <div className="SingleDetailWrapper container">
      <SingleDetailCards
        picture={singlePostsData?.image}
        title={singlePostsData?.title}
        author={singlePostsData?.author}
        date={singlePostsData?.created}
      />
      <div className="bannerImage">
        <img src={bannerImageData?.results[0]?.image} />
      </div>
      <div className="SingleDetailBelowBanner">
        <div className="SingleDetailBelowBanner-left">
          <div className='detailText'
            dangerouslySetInnerHTML={{
              __html: singlePostsData?.content?.slice(0, singlePostsData.contentlength),
            }}
          />
          <div className='detailText'
            dangerouslySetInnerHTML={{
              __html: singlePostsData?.content?.slice(0, singlePostsData.contentlength),
            }}
          />
          <Newsletter />
          <div className="LatestNewsHeader">
            <h2><span>Related Posts</span></h2>
          </div>
          <RelatedPostWrapper/>
        </div>
        <div className="SingleDetailBelowBanner-right">
          <SingleDetailRightCards />
        </div>
      </div>
    </div>
  )
}

export default SingleDetailWrapper