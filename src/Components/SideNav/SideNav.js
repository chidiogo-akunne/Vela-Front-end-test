import React from "react";
import { Link } from "react-router-dom";
import Button from "../Commons/Button/Button";

export default function SideNav() {
  return (
    <div>
      <Button className="btn btn-success">GENERATE INVOICE</Button>
      <ul>
        <span>
          <li>Main</li>
          <li>
            <i class="fas fa-tachometer-alt"></i>
            <Link to="/"></Link>
          </li>
        </span>
        <span>
          <li>Payments</li>
          <li>
            <i class="fas fa-wallet"></i>
            <Link to="/">All Payments</Link>
          </li>
          <li>
            <i class="fas fa-wallet"></i>
            <Link to="/">Reconciled Payment</Link>
          </li>
          <li>
            <i class="fas fa-wallet"></i>
            <Link to="/">Un-Reconciled Payment</Link>
          </li>
          <li>
            <i class="fas fa-dot-circle"></i>
            <Link to="/">Manuel Settlement</Link>
          </li>
        </span>
        <span>
          <li>Orders</li>
          <li>
            <i class="far fa-list-alt"></i>
            <Link to="/">All orders</Link>
          </li>
          <li>
            <i class="far fa-list-alt"></i>
            <Link to="/">Pending orders</Link>
          </li>
          <li>
            <i class="far fa-list-alt"></i>
            <Link to="/">Reconciled orders</Link>
          </li>
        </span>
      </ul>
    </div>
  );
}
