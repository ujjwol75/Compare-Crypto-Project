import React from 'react'

const RecentNews = () => {
  return (
    <>
      <div className="news">
        <img
          className="recentnews-image"
          src="https://bitcoinist.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-23-at-4.03.53-PM.png"
        />
        <div className="recent-inner">
          <h6><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,nobis!</b></h6>
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