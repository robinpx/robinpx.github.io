import React, { useState, useEffect } from 'react';

function Header() {

  const [active, setActive] = useState(["","","",""]);

  useEffect(() => {
    const windowlink = window.location.href;
    if (windowlink.includes("/?profile") > 0) {
      setActive(["","","active"])
    }
    else if (windowlink.includes("/?code") > 0) {
      setActive(["active","",""])
    }
    else if (windowlink.includes("/?art") > 0) {
      setActive(["","active",""])
    }
    else if (windowlink.includes("/?lab") > 0) {
      setActive(["","","","active"])
    }
  }, [setActive]);

  return (
    <header>
      <h1 id="title"><a href="/"><code>*</code> robin</a></h1>
      <nav>
          <a href="/?code" className={active[0]}>code</a>
          <a href="/?art" className={active[1]}>art</a>
          {/* <a href="/?lab" className={active[3]}>research</a> */}
          <a href="/?profile" className={active[2]}>profile</a>
      </nav>
    </header>
  );
}

export default Header;
