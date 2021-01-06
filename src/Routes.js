// Import all modules
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import all views
import Home from './views/Home';
import Login from './views/Login';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default Routes;