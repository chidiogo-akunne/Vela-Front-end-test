import React, {useState} from "react";
import Data from "../../Data/data";
import Button from "../Commons/Button/Button";
import './TableTransaction.css'

export default function TableTransaction(props) {
  const [transaction, setTransaction] = useState([
    {status: "Reconciled", status: "Pending", status: "Un-reconciled"}
  ]);
  return (
    <div className={props.className}>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Item Type</th>
            <th scope="col">Price</th>
            <th scope="col">Transaction No</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {Data.map(product => (
            <tr>
              <td>
                <span className="badgePill mr-3">VW</span> {product.item}
              </td>
              <td>{product.price}</td>
              <td>{product.transaction}</td>
              <td>{product.time}</td>
              <td>
                {product.status === "Reconciled" ? (
                  <Button className="btn btn-outline-secondary reconciled">
                  <i class="fas fa-circle"></i> Reconciled
                  </Button>
                ): product.status === "Un-reconciled" ? (
                  <Button className="btn btn-outline-secondary unreconciled">
                <i class="fas fa-circle"></i> Un-reconciled
                </Button>
                ) : (
                  <Button className="btn btn-outline-secondary pending">
                <i class="fas fa-circle"></i> Pending
                </Button>
                )}
                <i class="fas fa-angle-down pl-3"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const reconciled = {
    color: 'yellow'
}

const pending = {
    color: 'blue'
}