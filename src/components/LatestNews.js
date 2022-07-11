import React, { useState } from 'react'
import Link from 'next/link';

const LatestNews = (props) => {
  const id = props.id

  return (
    <>
        <Link href={`/detailpage/${props?.slug}`}>
      <div className="latestnews-wrapper">
        <div className="latestnews-image">
          <img className="latestnews-image" src={props.image} />
        </div>
        <div className="latestnews-wrapper-inner">
            <a>
              <b className="latestnews-font">{props.title}</b>
            </a>
          <span className="latest-news-span">
            by <span className="latest-news-span2">{props.author} </span>
            {props.created}
          </span>
        </div>
      </div>
      </Link>
    </>
  );
}

export default LatestNews