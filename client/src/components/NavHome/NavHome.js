import React from "react";
import "./style.css";

function NavHome() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
      <i className="fas fa-home"></i> <span className="title">Staycare</span>
      </a>
      <a className="nav-link" href="#"><i className="fas fa-sign-out-alt"></i> <span>Sign Out</span></a>
    </nav>
  );
}

export default NavHome;