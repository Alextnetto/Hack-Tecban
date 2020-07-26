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
import HandlerHome from './pages/handleHomer'

function App() {
  return (
    <Router>  
      <Switch>
        <Route path="/login" component={SignInSide} />
        <Route path="/">
          <HandlerHome />
        </Route>    
      </Switch>
    </Router>
  );
}

export default App;
