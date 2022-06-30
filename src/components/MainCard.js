import React from 'react'

const MainCard = (props) => {
  return (
    <>
      <div className="main-card-wrapper">
        <div className='main-card-image-wrapper'>
          <img
            className="main-card-image"
            // src="https://bitcoinist.com/wp-content/uploads/2022/06/quantum-computers-627x420.png"
            src={props.image}
          />
        </div>
        {/* <img
          className="main-card-image"
          // src="https://bitcoinist.com/wp-content/uploads/2022/06/quantum-computers-627x420.png"
          src={props.image}
        /> */}
        <div className="main-card-inner">
          <h2><b>{props.title}</b></h2>
          <div className="main-card-image-wrapper">
            <img
              className="maincardimage"
              src="https://bitcoinist.com/wp-content/uploads/2022/04/Bio-pic-300x300.jpg"
            />
            <p>
              {" "}
              by <span>{props.author}</span> {props.created} 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard