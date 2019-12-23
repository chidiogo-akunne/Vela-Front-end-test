import React from "react";
import Data from "../../Data/data";
import Button from "../Commons/Button/Button";

export default function TableTransaction() {
  return (
    <div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Image Type</th>
            <th scope="col">Price</th>
            <th scope="col">Transaction No</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {Data.map(product => (
            <tr>
              <td>
                <span>VW</span> {product.item}
              </td>
              <td>{product.price}</td>
              <td>{product.transaction}</td>
              <td>{product.time}</td>
              <td>
                <Button className="btn btn-outline-secondary">
                  {product.status}
                </Button>
                <i class="fas fa-angle-down"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
