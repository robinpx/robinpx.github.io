import React, { useState, useEffect } from 'react';
import labPosts from './posts/labPosts';

function Lab() {

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

    useEffect(() => {
        if (posts === -1) {
            setPosts(labPosts);
        }
    }, [posts]);

    return (posts !== -1) ? (
        <div id="main-frame">
        <aside>
            {posts.map((item, i) => {
            return <div className={"label" + (currentPost === i ? " showing" : "")} key={"label-"+i} onClick={() => showPost(i)}><h3>{currentPost === i ? <div className="dot"></div> : ""} <span className="title">{item["title"]}</span> &mdash; {item["desc"][0]}</h3></div>
            })}
        </aside>
        </div>
    )
    : <React.Fragment/>
}

export default Lab;
