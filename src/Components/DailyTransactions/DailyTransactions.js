import React from "react";
import './DailTransactions.css';
import Card from "../Commons/Card/Card";
import SmallChart from "../Charts/SmallChart";

export default function DailyTransactions(props) {
  return (
    <div>
      <Card style={transactionCardStyle}>
        <div className="row">
          <div className="col-8">
            <p className="transaction-P">Daily Transaction {props.title}</p>
            <p className="transaction-Price"><span>&#8358;</span>{props.price}</p>
          </div>
          <div className="col-4">
              <SmallChart />
          </div>
        </div>
      </Card>
    </div>
  );
}

const transactionCardStyle = {
    borderRadius: '0',
}
