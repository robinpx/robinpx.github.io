import React, { useState, useEffect } from 'react';

function Header() {

  const [active, setActive] = useState(["", "", ""]);
  const [navState, setNav] = useState("nav-hide");

  const toggleNav = () => {
    if (navState === "nav-hide") {
      setNav("nav-show");
    }
    else {
      setNav("nav-hide");
    }
  }

  useEffect(() => {
    const windowlink = window.location.href;
    if (windowlink.includes("/?profile") > 0) {
      setActive(["","","active"]);
    }
    else if (windowlink.includes("/?other") > 0) {
      setActive(["","active",""]);
    }
    else if (windowlink.includes("/?work") > 0) {
      setActive(["active","",""]);
    }
    else {
      if (windowlink.includes("/") > 0) {
        setActive(["","",""]);
      }
    }
  }, [setActive]);

  return (
    <header>
      <div id="title">
        <h1><a href="/"><code>*</code> Robin Luo</a></h1>
      </div>
      <div id="nav-reg">
          <a href="/?work" className={active[0]}>Work</a>
          <a href="/?other" className={active[1]}>Other</a>
          <a href="/?profile" className={active[2]}>Profile</a>
      </div>
      <div id="nav-mob">
      <div id="nav-button" onClick={toggleNav}>
        +
      </div>
      <div id="nav-dropdown" className={navState}>
          <a href="/?work" className={active[0]}>Work</a>
          <a href="/?other" className={active[1]}>Other</a>
          <a href="/?profile" className={active[2]}>Profile</a>
      </div>
      </div>
    </header>
  );
}

export default Header;
