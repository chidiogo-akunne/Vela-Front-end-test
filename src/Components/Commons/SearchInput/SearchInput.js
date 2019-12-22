import React from "react";

export default function SearchInput(props) {
  return (
    <div>
      <form class="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder={props.placholder}
          aria-label="Search"
        />
      </form>
    </div>
  );
}
