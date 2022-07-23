import React from "react";
import GoOut from "./GoOut";

export default function GoOutParent() {
  // ! state
  const [isGoing, setIsGoing] = React.useState(true);
  // ! handle click
  function handleClick() {
    setIsGoing((prevState) => !prevState);
  }
  return (
    <div>
      <GoOut isGoing={isGoing} handleClick={handleClick} />
    </div>
  );
}
