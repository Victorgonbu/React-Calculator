import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
