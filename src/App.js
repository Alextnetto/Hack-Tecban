import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './pages/login'
import SignInSide from './pages/login';

function App() {
  return (
    <Router>  
      <Switch>
        <Route path="/login" component={SignInSide} />
        <Route path="/">
          <Link to="/login/" > Hello </Link>
        </Route>    
      </Switch>
    </Router>
  );
}

export default App;
