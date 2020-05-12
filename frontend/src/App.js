import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../src/components/homePage/homePage.component';
import Navbar from "./components/layouts/Navbar.js";
import UserViewProfile from "./components/userViewProfile/UserViewProfile.js";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
