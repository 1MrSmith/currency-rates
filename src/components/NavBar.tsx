import * as React from 'react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../styles/route.styles';

export const NavBar: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <div>
      <nav className={classes.menu}>
        <div className={classes.menu__item}>
        <NavLink exact={true} activeClassName={classes.activeLink} to="/">
          Home
        </NavLink>
        </div>
        <div className={classes.menu__item}>
        <NavLink exact={true} activeClassName={classes.activeLink} to="/about">
          About
        </NavLink>
        </div>
      </nav>
    </div>
  );
});
