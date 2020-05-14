import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../src/components/homePage/homePage.component';
import Navbar from "./components/layouts/Navbar.js";
import UserViewProfile from "./components/userViewProfile/UserViewProfile.js";
import Feedback from "./components/Feedback/Feedback.js";
import ReportAccident from './components/ReportAccident/ReportAccident.js'

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={UserViewProfile} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/report-accident" component={ReportAccident} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
