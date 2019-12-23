import React from "react";
import Card from "../Commons/Card/Card";

export default function DailyTransactions(props) {
  return (
    <div>
      <Card>
        <div className="row">
          <div className="col-sm-8">
            <p>Daily Transaction {props.title}</p>
            <p>{props.price}</p>
          </div>
          <div className="col-sm-4">
              Chart
          </div>
        </div>
      </Card>
    </div>
  );
}
