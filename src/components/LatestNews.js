import React from 'react'
import Link from 'next/link';

const LatestNews = (props) => {
  const id = props.id
  return (
    <>
      <div className="latestnews-wrapper">
        <img className="latestnews-image" src={props?.image} />
        <div className="latestnews-wrapper-inner">
          {/* {`/Singlepage?id=${id}`} */}
          <Link href={{
            pathname: `/Singlepage?id=${id}`,
            query:{
              curElem:props.title
            }

          }} as={`/Singlepage?id=${id}`}>
            <a>
              <b className="latestnews-font">{props?.title?.slice(0, 60)}</b>
            </a>
          </Link>
          {/* <span className="latest-news-span1">
            {props?.description}
          </span> */}
          <span className="latest-news-span">
            by <span className="latest-news-span2">{props?.author} </span>
            {props?.created}
          </span>
        </div>
        {/* <b className="latestnews-font">
          CZ Comment On Crypto Bailouts, Why Some Projects Shouldn’t Be “Saved”
        </b>
        <span className="latest-news-span1">
          The CEO of the world’s largest crypto exchange Binance Changpeng “CZ”
          Zhao addressed the bailout happening in the industry. As...
        </span>
        <span className="latest-news-span">
          by <span className="latest-news-span2">Best Owie </span>8 hours ago
        </span> */}
      </div>
    </>
  );
}

export default LatestNews