import React from 'react'
import Image from 'next/image'

const Pressrelease = (props) => {
  return (
    <>
      <div className="pressrelease-wrapper">
        <div className="pressrelease-image-wrapper">
          <Image
            height={100}
            width={100}
            className="pressrelease-image"
            src={props.image}
          />
        </div>
        {/* <img src="https://bitcoinist.com/wp-content/uploads/2022/06/Picture207-64x64.jpg" /> */}
        <div className="pressrelease-inner">
          <span>LBank Exchange Will List ETHICA</span>
          <span>on June 23, 2022</span>
          <span className="pressrelease-span">20 hours ago</span>
        </div>
      </div>
    </>
  );
}

export default Pressrelease