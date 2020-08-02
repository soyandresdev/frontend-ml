import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '@UI/Pages/HomePage';
import SearchPage from '@UI/Pages/SearchPage';
import ProducDetailPage from '@UI/Pages/ProducDetailPage';
import NotFoundPage from '@UI/Pages/NotFoundPage';
import { ProductsProvider } from '@Hooks/store/productsStoreContext';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/items">
        <ProductsProvider>
          <SearchPage />
        </ProductsProvider>
      </Route>
      <Route exact path="/items/:id">
        <ProductsProvider>
          <ProducDetailPage />
        </ProductsProvider>
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
