import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="cardBody" style={props.style}>{props.children}</div>
    </div>
  );
}
