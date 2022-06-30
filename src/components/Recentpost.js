import React from 'react'

const Recentpost = (props) => {
  return (
    <>
      <div className="recentpost">
        <div className='recentpost-image-wrapper'>
          <img className="recentpost-image" src={props.image} />
        </div>
        {/* <img className="recentpost-image" src={props.image} /> */}
        <div className="recentpost-inner">
          <b>
            {props.title?.slice(0,60)}
            {/* Citibank, Swiss Crypto Firm Partner To Develop Bitcoin Custody
            Services */}
          </b>
          <p>{props.created}</p>
        </div>
      </div>
    </>
  );
}

export default Recentpost