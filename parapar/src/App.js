import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './pages/login'
import SignInSide from './pages/login';
import MatchPage from "./pages/match_page"

function App() {
  return (
    <Router>  
      <Switch>
        <Route path="/login" component={SignInSide} />
        <Route path="/match" component={MatchPage} />
        <Route path="/">
          <h1>Hello</h1>
        </Route>    
      </Switch>
    </Router>
  );
}

export default App;
