import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Watch from '../pages/Watch';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Watch} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
