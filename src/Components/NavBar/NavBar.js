import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchInput from "../Commons/SearchInput/SearchInput";
import ProfilePic from "../../Images/profile.png";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          TransMonitor
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <SearchInput placeholder="Search..." SearchStyle="searchStyle" />
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navbarSpace">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>
            <li className="nav-item navbarSpace">
              <NavLink className="nav-link" to="/faq">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item navbarSpace">
              <NavLink className="nav-link" to="/notificatiom">
                <i className="far fa-bell"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                <span className="userName">Hello</span> Oluwaleke Ojo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                <img src={ProfilePic} alt="profile avatar" className="profilePic"/>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
