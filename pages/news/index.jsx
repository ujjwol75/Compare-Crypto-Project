import React,{useState} from 'react'
import { APIS } from '../api/hello'
import { getApiData } from '../../Helper/Axiosinstance'
import LatestNews from '../../src/components/LatestNews'
import Premiumpartner from "../../src/components/Premiumpartner";
import Premiumcasino from "../../src/components/Premiumcasino";
import Topbroker from "../../src/components/Topbroker";
import Topcasino from "../../src/components/Topcasino";
import Pressrelease from "../../src/components/Pressrelease";

const New = (props) => {

  const {posts} = props
  
  const [visible,setVisible] = useState(9)

  const showMoreItems = () =>{
    setVisible((prevValue)=>prevValue+4)
  }

  return (
    <>
     <h4><b>News</b></h4>
     <div className="latest-news-outer">
        <div className="latest-news-first-row">
            {posts?.results?.slice(3, visible)?.map((curElem, key) => (
              <React.Fragment key={key}>
                <LatestNews
                  key={key}
                  slug={curElem?.slug}
                  image={curElem?.image}
                  title={curElem?.title}
                  created={curElem.created}
                  author={curElem.author}
                />
              </React.Fragment>
            ))}
          <span className="latestnews-load-more" onClick={showMoreItems}>
            Load More
          </span>
        </div>

        <div className="premium">
          <hr />
          <div>
            <b>Premium Partners</b>
            <Premiumpartner />
          </div>
          <hr />
          <div>
            <b>Premiun Casino Partners</b>
            <div className="premium-image-wrapper">
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2021/04/BitStarz@2x-min-2.png"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2022/01/punt-casino-logo1.png"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2022/03/Logo_BCGames.png"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2021/12/cryptoslots.jpg"
                }
              />
              <Premiumcasino
                image={
                  "https://bitcoinist.com/wp-content/uploads/2022/03/IMAGE-2022-03-04-135412.jpg"
                }
              />
            </div>
          </div>
          <hr />
          <div>
            <b>Top Brokers</b>
            <Topbroker />
          </div>
          <hr />
          <div>
            <b>Top Casino</b>
            <Topcasino />
          </div>
          <hr />
          <div className="pressrelease-outer">
            <b>Press Releases</b>
            {posts?.results?.slice(0, 7)?.map((curElem, key) => (
              <React.Fragment key={key}>
                 <Pressrelease image={curElem?.image} slug={curElem?.slug} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>  
    </>
  )
}

export default New

export async function getServerSideProps({ params }) {
  const url = APIS.posts
  const posts = await getApiData(url);
  return {
    props: {
      posts: posts?.data,
    }, // will be passed to the page component as props
  };
}
