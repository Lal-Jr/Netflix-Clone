import React from 'react';
import { Home, Browse, Signin, Signup } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path="/browse">
        <Browse />    
      </Route>
      <Route exact path="/signup">
        <Signup />    
      </Route>
      <Route exact path="/signin">
        <Signin />    
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home /> 
      </Route>
    </Router>
  );
}


