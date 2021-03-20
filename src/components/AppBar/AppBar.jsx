import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import routes from '../../routes';

const AppBar = () => {
  return (
    <nav className={styles.AppBar_Navigation}>
      <div className={styles.AppBar_container}>
        <NavLink
          exact
          className={styles.Navigation_Link}
          activeClassName={styles.Active_Navigation_Link}
          to={routes.home}
        >
          Home
        </NavLink>
        <NavLink
          className={styles.Navigation_Link}
          activeClassName={styles.Active_Navigation_Link}
          to={routes.movies}
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
};

export default AppBar;
