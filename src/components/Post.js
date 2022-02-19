import React, { useEffect, useState } from 'react';
import Slideshow from './layouts/Slideshow';
import "./Post.css";

function Post(props) {

  const [post, setPost] = useState(-1);

  useEffect(() => {
    if (post === -1 || post !== props.post) {
      setPost(props.post);
    }
  }, [post, props])

  return post !== -1 ? (
    <div className="post-container">
    
    <Slideshow images={post["images"]} isClickable={post["slidelayout"]} />
    <div className="post-section">
      <div className='post-column year'>
        <div className='dot'></div> {post["year"]}
      </div>
      {post["links"].length !== 0 ? <div className='post-column links'>
      {post["links"].map((l,i) => {
            return <div><a href={l[0]} key={i}>{l[1]}</a></div>
        })}
      </div> : <React.Fragment/>}
      <div className="post-column">
      <div className="genre">{post["genre"]}</div>
      <div className="tags">
      {post["tags"].map((ln, i) => {
            return <React.Fragment><div key={i}>{ln}</div></React.Fragment>
      })}
      </div>
      </div>
    </div>
    {post["desc"].map((det, i) => {
      return i > 0 ? <article key={i}>{det}</article> : <React.Fragment/>
    })}
    </div>
  ) : <React.Fragment/>;
}

export default Post;
