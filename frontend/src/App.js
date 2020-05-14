import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../src/pages/homepage/homePage.component';
import UserProfile from './pages/userProfile/userProfile.component.jsx';
import ReportAccident from './pages/reportAccidentPage/reportAccident.component';
import Navbar from './components/nav-bar/navbar.component';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/report-accident" component={ReportAccident} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
