import React from "react";

export default function GoOut(props) {
  return (
    <div>
      <h1>Should I go out tonight?</h1>
      <div>
        <h1 onClick={props.handleClick}>{props.isGoing ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
