import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./UpdateClaim.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand" >
            <a href="/claims">MediBuddy</a> 
            </div>
          <ul className="navbar-nav ml-auto list-unstyled">
            <li className="nav-item active">
              <div><a href="/">Signout</a></div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
