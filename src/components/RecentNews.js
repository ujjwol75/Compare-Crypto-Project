import React from 'react'

const RecentNews = (props) => {
  return (
    <>
      <div className="news">
        <div className='recentnews-image-wrapper'>
          <img className="recentnews-image" src={props.image} />
        </div>
        <div className="recent-inner">
          <h4>
            <b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi,nobis!
            </b>
          </h4>
          <div className="recent-overlay">
            <p>
              by <span className="recent-span">Jet Encila</span> . 5 hours ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentNews