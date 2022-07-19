import React, { useState, useEffect } from 'react';

function Header() {

  const [active, setActive] = useState(["", "", ""]);

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
      <div id="eng">
        <a href="/?work" className={active[0]}>Work</a>
      </div>
      <div id="art">
        <a href="/?other" className={active[1]}>Other</a>
      </div>
      <div id="nav">
          <a href="/?profile" className={active[2]}>Profile</a>
      </div>
    </header>
  );
}

export default Header;
