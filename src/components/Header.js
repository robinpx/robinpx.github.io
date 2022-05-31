import React, { useState, useEffect } from 'react';

function Header() {

  const [active, setActive] = useState(["", "", ""]);

  useEffect(() => {
    const windowlink = window.location.href;
    if (windowlink.includes("/?profile") > 0) {
      setActive(["","","active"]);
    }
    else if (windowlink.includes("/?art") > 0) {
      setActive(["","active",""]);
    }
    else {
      if (windowlink.includes("/") > 0) {
        setActive(["active","",""]);
      }
    }
  }, [setActive]);

  return (
    <header>
      <div id="title">
        <h1><a href="/"><code>*</code> robin</a></h1>
        </div>
      <div id="eng">
        <a href="/" className={active[0]}>Engineering</a>
      </div>
      <div id="art">
        <a href="/?art" className={active[1]}>Art</a>
      </div>
      <div id="nav">
          <a href="/?profile" className={active[2]}>Info</a>
      </div>
    </header>
  );
}

export default Header;
