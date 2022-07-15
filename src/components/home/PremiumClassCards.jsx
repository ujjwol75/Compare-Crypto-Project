import React from 'react';

function PremiumClassCards(props) {
  // console.log("props",props);
  return (
    <>
         <div className="img-holder">
         <img src={props.picture}  alt=""/>
        </div>
    </>
  )
}

export default PremiumClassCards;