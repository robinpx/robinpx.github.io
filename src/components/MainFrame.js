import React, { useEffect, useState } from 'react';
import artPosts from './posts/artPosts';
import Card from './Card';
import './MainFrame.css';
import codePosts from './posts/codePosts';

function MainFrame(props) {

  const [posts, setPosts] = useState(-1);
  const [kind, setKind] = useState(-1);
  
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
  <div id="cards">
    {posts.map((item,i)=> {
      return <Card post={item} key={i} />
    })}
  </div> 
  ) : <React.Fragment/>;
}

export default MainFrame;
