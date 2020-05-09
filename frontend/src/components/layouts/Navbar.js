import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src="images/logo.svg" alt="Help logo" id="logo" />
      </Link>
      <nav className="nav">
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
    </header>
  );
}
export default Navbar;
