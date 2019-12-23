import React from "react";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  return (
    <div style={props.pageStyle}>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-right">
          <li className="page-item">
            <Link className="page-link" to="/" style={pageLink}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" style={pageActive} to="/">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/" style={pageLink2}>
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/" style={pageLink}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const pageActive = {
    background: '#1875F0',
    color: '#fff'
}

const pageLink = {
    color: '#000'
}

const pageLink2 = {
    color: '#979797'
}
