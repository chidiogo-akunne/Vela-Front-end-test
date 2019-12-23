import React from "react";
import { Link } from "react-router-dom";
import Button from "../Commons/Button/Button";
import "./SideNav.css";

export default function SideNav() {
  return (
    <div className="sideNav">
      <Button className="btn btn-success mx-auto d-flex">
        GENERATE INVOICE
      </Button>
      <ul className="sideNav-Ul">
        <li className="sideNav-Space">Main</li>
        <li>
          <i class="fas fa-tachometer-alt"></i>
          <Link to="/" className="sideNav-Link">
            Overview
          </Link>
        </li>
        <li className="sideNav-Space">Payments</li>
        <li>
          <i class="fas fa-wallet"></i>
          <Link to="/" className="sideNav-Link">
            All Payments
          </Link>
        </li>
        <li>
          <i class="fas fa-wallet"></i>
          <Link to="/" className="sideNav-Link">
            Reconciled Payment
          </Link>
        </li>
        <li>
          <i class="fas fa-wallet"></i>
          <Link to="/" className="sideNav-Link">
            Un-Reconciled Payment
          </Link>
        </li>
        <li>
          <i class="fas fa-dot-circle"></i>
          <Link to="/" className="sideNav-Link">
            Manuel Settlement
          </Link>
        </li>
        <li className="sideNav-Space">Orders</li>
        <li>
          <i class="far fa-list-alt"></i>
          <Link to="/" className="sideNav-Link">
            All orders
          </Link>
        </li>
        <li>
          <i class="far fa-list-alt"></i>
          <Link to="/" className="sideNav-Link">
            Pending orders
          </Link>
        </li>
        <li>
          <i class="far fa-list-alt"></i>
          <Link to="/" className="sideNav-Link">
            Reconciled orders
          </Link>
        </li>
        <li className="sideNav-Space">
          <i class="far fa-user"></i>
          <Link to="/" className="sideNav-Link">
            Merchant Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
