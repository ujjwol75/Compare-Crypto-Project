import React from 'react'

const Recentpost = (props) => {
  return (
    <>
      <div className="recentpost">
        <div className='recentpost-image-wrapper'>
          <img className="recentpost-image" src={props.image} />
        </div>
        <div className="recentpost-inner">
          <b>
            {props.title?.slice(0,60)}
          </b>
          <p>{props.created}</p>
        </div>
      </div>
    </>
  );
}

export default Recentpost