import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <NavLink to="/" activeClassName="is-active" exact={true}><li>home</li></NavLink>
      <NavLink to="/create" activeClassName="is-active"><li>create</li></NavLink>
      <NavLink to="/help" activeClassName="is-active"><li>help</li></NavLink>
    </ul>
    <hr/>
  </header>
);

export default Header;