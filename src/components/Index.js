import React from 'react';
import MorseBanner from './layouts/MorseBanner';
import MainFrame from './MainFrame';
import Lab from './Lab';
import Profile from './Profile';

function Index() {

  const windowlink = window.location.href;

  if (windowlink.includes("/?profile") > 0) {
    return (
      <Profile />
    );
  }
  else if (windowlink.includes("/?code") > 0) {
    return (
      <MainFrame kind="code" />
    );
  }
  else if (windowlink.includes("/?art") > 0) {
    return (
      <MainFrame kind="art" />
    );
  }
  else if (windowlink.includes("/?lab") > 0) {
    return (
      <Lab />
    );
  }
  return (
      <div id="banner">
          <MorseBanner />
     </div>
  );
  
}

export default Index;
