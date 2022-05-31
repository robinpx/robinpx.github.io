import React from 'react';
import MainFrame from './MainFrame';
import Profile from './Profile';

function Index() {

  const windowlink = window.location.href;

  if (windowlink.includes("/?profile") > 0) {
    return (
      <Profile />
    );
  }
  else if (windowlink.includes("/?art") > 0) {
      return (
        <div>
        <div id="banner">Robin is an <b>artist</b> who works with text, sound, space, and computation.</div>
        <MainFrame kind="art" />
        </div>
      )
  }
  return (
    <div>
      <div id="banner">Robin is an <b>engineer</b> who has worked in software, research, and media art.</div>
      <MainFrame kind="code" />
    </div>
  );
  
}

export default Index;
