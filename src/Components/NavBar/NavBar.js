import React from "react";
import {NavLink} from 'react-router-dom'
import SearchInput from "../Commons/SearchInput/SearchInput";
import ProfilePic from "../../Images/ProfilePic.png"

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
           <SearchInput placeholder="Search..."/>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/support">
                Support 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#/faq">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/notificatiom">
                <i className="far fa-bell"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                <span>Hello</span> Oluwaleke Ojo
                <img src={ProfilePic} alt="profile image"/>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
