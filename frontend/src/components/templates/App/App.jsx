import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '@UI/Pages/HomePage';
import SearchPage from '@UI/Pages/SearchPage';
import NotFoundPage from '@UI/Pages/NotFoundPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/items">
        <SearchPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
