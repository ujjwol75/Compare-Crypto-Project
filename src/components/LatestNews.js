import React, { useState } from 'react'
import Link from 'next/link';

const LatestNews = (props) => {
  const id = props.id

  return (
    <>
      <div className="latestnews-wrapper">
        <div className="latestnews-image">
          <img className="latestnews-image" src={props.image} />
        </div>
        <div className="latestnews-wrapper-inner">
          <Link href={`/detailpage/${props?.slug}`}>
            <a>
              <b className="latestnews-font">{props.title}</b>
            </a>
          </Link>
          <span className="latest-news-span">
            by <span className="latest-news-span2">{props.author} </span>
            {props.created}
          </span>
        </div>
      </div>
    </>
  );
}

export default LatestNews