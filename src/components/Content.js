import React from 'react'


const Content = (props) => {
  const {singlepagedata} = props
  return (
    <>
      <div className='content-wrapper'>
        {singlepagedata?.content}
      </div>
    </>
  );
}

export default Content