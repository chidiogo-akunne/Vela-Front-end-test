import React from "react";
import './DailTransactions.css';
import Card from "../Commons/Card/Card";

export default function DailyTransactions(props) {
  return (
    <div>
      <Card style={transactionCardStyle}>
        <div className="row">
          <div className="col-sm-8">
            <p className="transaction-P">Daily Transaction {props.title}</p>
            <p className="transaction-Price"><span>&#8358;</span>{props.price}</p>
          </div>
          <div className="col-sm-4">
              Chart
          </div>
        </div>
      </Card>
    </div>
  );
}

const transactionCardStyle = {
    borderRadius: '0',
}
