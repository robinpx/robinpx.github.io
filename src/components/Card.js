import React, { useEffect, useState } from 'react';
import Slideshow from './layouts/Slideshow';
import "./Card.css";
import { Markup } from 'interweave';

function Card(props) {

  const [post, setPost] = useState(-1);

  useEffect(() => {
    if (post === -1 || post !== props.post) {
      setPost(props.post);
    }
  }, [post, props])

  return post !== -1 ? (
    <div className={"card-container " + post["cardlayout"]}>
        <div className="card-info">
          <div className="card-content">
              <span className="year">{post["year"]} </span>
              <span className="title"><b>{post["title"]}</b></span> 
              <span className="genre">{post["genre"]} </span>
          </div>
          <div className="card-desc">
            <Markup content={post["desc"]} />
          </div>
          <div className="card-meta">
            {post["links"] !== undefined ?
              <div className="links">
                {post["links"].map((item, i) => {
                return <a href={item[0]} key={i}>{item[1]}</a>
                })}
              </div>
            : <React.Fragment/>}
            {post["tags"] !== undefined ? 
              <div className="tags">{post["tags"]}</div>
            : <React.Fragment/>}
          </div> 
        </div>

        <Slideshow images={post["images"]} layout={post["slidelayout"]} />
        
    </div>
    
  ) : <React.Fragment/>;
}

export default Card;
