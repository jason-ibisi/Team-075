import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  showMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  render() {
    return (
      <header>
        <img src="images/logo.svg" alt="help logo" id="logo" />
        <nav className={"nav " + (this.state.showMenu ? "show-menu" : "")}>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>
          <Link className="nav-link" to="/how-it-works">
            How it works
          </Link>
          <Link className="nav-link" to="/faq">
            FAQ
          </Link>
        </nav>
        <img
          src="images/bars.svg"
          alt="hamburger icon"
          id="hamburger-icon"
          onClick={this.showMenu}
        />
      </header>
    );
  }
}
