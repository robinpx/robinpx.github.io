import React, { useEffect, useState } from 'react';
import codePosts from './posts/codePosts';
import artPosts from './posts/artPosts';
import Post from './Post';
import './MainFrame.css';

function MainFrame(props) {

  const [posts, setPosts] = useState(-1);
  const [currentPost, setCurrentPost] = useState(0);

  const showPost = (ind) => setCurrentPost(ind);
  const prevPost = () => {
    let prev = currentPost - 1 > -1 ? currentPost - 1 : posts.length - 1;
    showPost(prev);
  }

  const nextPost = () => {
    let next = currentPost + 1 < posts.length ? currentPost + 1 : 0;
    showPost(next);
  }
  
  useEffect(()=>{
    if (posts === -1) {
      let p = props.kind === "code" ? codePosts : artPosts;
      setPosts(p);
    }
  }, [posts, props]);

  return posts !== -1 ? (
  <div id="main-frame">
  <aside>
    {posts.map((item, i) => {
      return <div className={"label" + (currentPost === i ? " showing" : "")} key={"label-"+i} onClick={() => showPost(i)}><h3>{currentPost === i ? <div className="dot"></div> : ""} <span className="title">{item["title"]}</span> &mdash; {item["desc"][0]}</h3></div>
    })}
  </aside>
  
  <div id="frame">
    <Post post={posts[currentPost]} />
  </div>

  {posts.length !== 1 ? 
  <div id="main-arrows">
    <div id="main-left-arrow" onClick={() => prevPost()}>
    <div className="box arrow-left"></div><div className="line"></div>
    </div>
    <div id="main-right-arrow" onClick={() => nextPost()}>
    <div className="line"></div><div className="box arrow-right"></div>
    </div>
  </div>
  : <React.Fragment />}
  </div> 
  ) : <React.Fragment/>;
}

export default MainFrame;
