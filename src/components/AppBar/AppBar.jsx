import React from 'react';
import {NavLink} from 'react-router-dom';

const AppBar = () => {
    return <nav className="App-header-list">
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
}

export default AppBar;