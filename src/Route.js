/*
 * @file: App.js
 * @description: App Configration
 * */

import React from 'react';

import App from './App';
import AppFlight from './App-flight';
import AppTracker from './App-tracker';
import AppDeals from './App - Deals';
import AppContactUs from './App - ContactUs';

import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const history = createBrowserHistory();


/************ store configration *********/

const NewApp = () => {
    

  return (
     <Router history={history}>
      <Switch>
          <Route exact path="/travanya">
            <App />
          </Route>
          <Route path="/flight"> <AppFlight />
          </Route>
          <Route path="/deals"> <AppDeals />
          </Route>
          <Route path="/tracker"> <AppTracker />
          </Route>
          <Route path="/contact-us"> <AppContactUs/>
          </Route>
         
        </Switch>
     
            </Router>
  );
};

export default NewApp;
