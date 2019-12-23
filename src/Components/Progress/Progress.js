import React from "react";
import Card from "../Commons/Card/Card";

export default function Progress(props) {
  return (
    <div>
      <Card>
        <P>{props.title}</P>
        <div class="progress" style="height: 5px;">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 80%;"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </Card>
    </div>
  );
}
