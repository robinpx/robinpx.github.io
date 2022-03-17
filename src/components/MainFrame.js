import React, { useEffect, useState } from 'react';
import artPosts from './posts/artPosts';
import Post from './Post';
import './MainFrame.css';
import codePosts from './posts/codePosts';

function MainFrame(props) {

  const [posts, setPosts] = useState(-1);
  const [kind, setKind] = useState(-1);
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
    if (kind !== props.kind) {
      setKind(-1);
      setPosts(-1);
    }
    if (posts === -1 && kind === -1) {
      let p = props.kind === "code" ?  codePosts : artPosts;
      setKind(props.kind);
      setPosts(p);
    }
  }, [posts, kind, props]);

  return (posts !== -1) ? (
  <div id="main-frame">
  <aside>
    {posts.map((item, i) => {
      if (item["id"].includes("1") > 0 && item["id"].includes("a") <= 0) {
        return <React.Fragment><br></br><div className={"label" + (currentPost === i ? " showing" : "")} key={"label-"+i} onClick={() => showPost(i)}><h3>{currentPost === i ? <div className="dot"></div> : ""} <span className="title">{item["title"]}</span> &mdash; {item["desc"][0]}</h3></div></React.Fragment>
      }
      return <div className={"label" + (currentPost === i ? " showing" : "")} key={"label-"+i} onClick={() => showPost(i)}><h3>{currentPost === i ? <div className="dot"></div> : ""} <span className="title">{item["title"]}</span> &mdash; {item["desc"][0]}</h3></div>
    })}
  </aside>
  
  <div id="frame">
    <Post post={posts[currentPost]} key={currentPost} />
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
