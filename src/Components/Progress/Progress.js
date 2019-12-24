import React from "react";
import Card from "../Commons/Card/Card";
import ProgressBar from "../ProgressBar/ProgressBar"

export default function Progress(props) {
  return (
    <div className={props.className}>
      <Card style={progressCard}>
        <p style={progressTitle}>{props.title}</p>
        <ProgressBar />
        <p style={progressP} className="pt-3">Pending Orders: <span style={yellow}>20</span></p>
        <p style={progressP}>Reconciled Orders: <span style={green}>80</span></p>
        <p style={progressP}>Total Orders: <span style={blue}>100</span></p>
      </Card>
    </div>
  );
}

const progressCard = {
    padding: '1rem'
}

const progressTitle = {
    color: '#262626',
    fontSize: '14px',
    fontWeight: '600'
}

const progressP = {
    color: '#262626',
    fontSize: '14px', 
    lineHeight: '10px',
}

const yellow = {
    color: '#f2f21a',
    fontWeight: '600'
}

const green = {
    color: '#2bbd2b',
    fontWeight: '600'
}

const blue = {
    color: '#4949f2',
    fontWeight: '600'
}