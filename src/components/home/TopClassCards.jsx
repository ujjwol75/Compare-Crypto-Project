import React from 'react'

function TopClassCards(props) {
    return (
        <>
            <div className="TopClassCards-left">
                <div className="img-holder">
                    <img src={props.picture} alt=""/>
                </div>
            </div>
            <div className="TopClassCards-right">
                <h2>abcd</h2>
            </div>
        </>
    )
}

export default TopClassCards