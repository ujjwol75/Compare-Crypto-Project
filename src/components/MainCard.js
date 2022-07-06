import React from 'react'

const MainCard = (props) => {
  const {singlepagedata} = props
  return (
    <>
      <div className="main-card-wrapper">
        <div className="main-card-image-wrapper">
          <img className="main-card-image" src={singlepagedata?.image} />
        </div>
        <div className="main-card-inner">
          <h2>
            <b>{singlepagedata?.title}</b>
          </h2>
          <div className="main-card-image-wrapper">
            <img
              className="maincardimage"
              src="https://bitcoinist.com/wp-content/uploads/2022/04/Bio-pic-300x300.jpg"
            />
            <p>
              {" "}
              by <span>{singlepagedata?.author}</span> {singlepagedata?.created}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard