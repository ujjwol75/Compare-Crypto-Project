import React from 'react'

function Hometop(props) {
  return (
    <>
      <div className="imgholder">
        <img src={props.picture} alt="" />
      </div>
      <div className="hometop-content">
        <h3>{props.title}</h3>
        <p>by <span className='blue-text'>{props.author}</span>.{props.time}</p>
      </div>
    </>
  )
}

export default Hometop