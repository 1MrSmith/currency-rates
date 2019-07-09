import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './Components/Routes';

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>
, document.getElementById('root'));

serviceWorker.unregister();
