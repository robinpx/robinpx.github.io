import React, { useEffect, useState } from 'react';
import Slideshow from './layouts/Slideshow';
import { Markup } from 'interweave';
import "./Card.css";

function Card(props) {

  const [post, setPost] = useState(-1);

  useEffect(() => {
    if (post === -1 || post !== props.post) {
      setPost(props.post);
    }
  }, [post, props])

  return post !== -1 ? (
    <div className={"card-container " + post["cardlayout"]}>
    <div className="card-content">
      <span className="title"><b>{post["title"]}</b></span> 
      <span className="year">{post["year"]} </span>
      <span className="genre">{post["genre"]} </span>
    </div>
        <Slideshow images={post["images"]} layout={post["slidelayout"]} />
        <div className="info">
          <div className="tags">{post["tags"]}</div>
          {post["links"] !== undefined ?
          post["links"].map((item, i) => {
            return <a href={item[0]} key={i}>{item[1]} ↗</a>
          })
          : <React.Fragment/>}
        </div> 
    </div>
  ) : <React.Fragment/>;
}

export default Card;
