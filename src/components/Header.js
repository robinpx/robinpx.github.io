import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header>
    <h1 id="title"><a href="/"><code>*</code> robin</a></h1>
    <nav>
        <NavLink activeClassName="active" to="/code">code</NavLink>
        <NavLink activeClassName="active"  to="/art">art</NavLink>
        <NavLink activeClassName="active" to="/profile">profile</NavLink>
    </nav>
    </header>
  );
}

export default Header;
