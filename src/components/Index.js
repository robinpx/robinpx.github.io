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
  else if (windowlink.includes("/?other") > 0) {
      return (
        <div>
        {/* <div id="banner">Robin Luo is an <b>artist</b> who works with text, sound, space, and computation.</div> */}
        <MainFrame kind="art" />
        </div>
      )
  }
  else if (windowlink.includes("/?work") > 0) {
    return (
    <div>
      {/* <div id="banner">Robin Luo is a software <b>engineer</b> who has worked in research, and media art.</div> */}
      <MainFrame kind="code" />
    </div>
    )
  }
  return (
    <div>
      <div id="banner">Robin Luo is a <b>Frontend Software Engineer</b> based in Queens, NY.</div>
      <MainFrame kind="code" />
    </div>
  );
}

export default Index;
