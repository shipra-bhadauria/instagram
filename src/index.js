import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render( 
    <HashRouter history={history}>
    <Switch>
      <Route path="/" name="Instagram" component={Routes} />
    </Switch>
    </HashRouter>,
   document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
