import React, { useEffect, useState } from 'react';

function Header() {

  const [active, setActive] = useState([-1,-1,-1]);

  useEffect(()=> {
    if (active[0] === -1) {
      if (window.location.href.includes("code") && active[0] === -1) {
        setActive([1,0,0]);
      }
      else if (window.location.href.includes("art") && active[0] === -1) {
        setActive([0,1,0]);
      }
      else if (window.location.href.includes("profile") && active[0] === -1) {
        setActive([0,0,1]);
      }
      else {
        setActive([0,0,0]);
      }
    }
  }, [active]);

  return (
    <header>
    <h1 id="title"><a href="/"><code>*</code> robin</a></h1>
    <nav>
        <a className={active[0] === 1 ? "active" : ""} href="/code">code</a>
        <a className={active[1] === 1 ? "active" : ""}  href="/art">art</a>
        <a className={active[2] === 1 ? "active" : ""}  href="/profile">profile</a>
    </nav>
    </header>
  );
}

export default Header;
