import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Home } from './Home';
import { About } from './About';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../Styles/route.styles';
import { Currency } from './Currency';

export const Routes: React.FC = memo(() => {

  const classes = useStyles();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact={true} activeClassName={classes.activeLink} to="/">Home</NavLink>
          </li>
          <li>
          <NavLink exact={true} activeClassName={classes.activeLink} to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/currency/:id/:abbr" component={Currency} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
});
