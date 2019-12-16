/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ResultsPage from 'containers/ResultsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
