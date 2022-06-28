import React from 'react'

const MainCard = () => {
  return (
    <>
      <div className="main-card-wrapper">
        <img
          className="main-card-image"
          src="https://bitcoinist.com/wp-content/uploads/2022/06/quantum-computers-627x420.png"
        />
        <div className="main-card-inner">
          <h2>Quantum Computers Rise From Australian Lab</h2>
          <h2>– A Threat To Cryptocurrency?</h2>
          <div className="main-card-image-wrapper">
            <img
              className="maincardimage"
              src="https://bitcoinist.com/wp-content/uploads/2022/04/Bio-pic-300x300.jpg"
            />
            <p>
              {" "}
              by <span>Jet Encila</span> 22 mins ago in Crypto News,
              Quantum Computing
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard