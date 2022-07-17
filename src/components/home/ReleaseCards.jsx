import React from 'react'

function ReleaseCards(props) {
    return (
        <>
            <div className="ReleaseCards-left">
                <div className="img-holder">
                    <img src={props.picture} />
                </div>
            </div>
            <div className="ReleaseCards-right">
                <h2>{props.title}</h2>
                <p className='small-text'>{props.date}</p>
            </div>
        </>
    )
}

export default ReleaseCards