import React from 'react'

function LatestNewsCard(props) {
  return (
    <>
      <div className="imgholder">
        <img src={props.picture} alt="" />
      </div>
      <div className="LatestNewsTop-content">
        <h2>{props.title}</h2>
        <p className='small-text'>{props.description}</p>
        <p>by <span className='blue-text'>{props.author}</span>. {props.time}</p>
      </div>
    </>
  )
}

export default LatestNewsCard;