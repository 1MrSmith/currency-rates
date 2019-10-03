import React from 'react';
import './App.css';

import {
  Route,
  Redirect,
  Switch,
} from 'react-router';

import { Home } from './routes/Home';
import { Currency } from './routes/Currency';
import { About } from './routes/About';
import { NavBar } from './components/NavBar';

export const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/currency/:id/:abbr" component={Currency} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
};
