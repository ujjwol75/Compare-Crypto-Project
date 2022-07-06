import React from 'react'

const Recentpost = (props) => {
  const {singlepagedata} = props
  return (
    <>
      <div className="recentpost">
        <div className='recentpost-image-wrapper'>
          <img className="recentpost-image" src={singlepagedata?.image} />
        </div>
        <div className="recentpost-inner">
          <b>
            {singlepagedata?.title?.slice(0,60)}
          </b>
          <p>{singlepagedata?.created}</p>
        </div>
      </div>
    </>
  );
}

export default Recentpost