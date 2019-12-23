import React from "react";
import "./SearchInput.css";

export default function SearchInput(props) {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0 fas fa-search">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder={props.placeholder}
          aria-label="Search"
          className={props.SearchStyle}
        />
      </form>
    </div>
  );
}

