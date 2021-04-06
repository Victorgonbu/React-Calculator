import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/calculator" component={App} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
