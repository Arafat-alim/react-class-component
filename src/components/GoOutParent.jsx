import React from "react";
import GoOut from "./GoOut";

// export default function GoOutParent() {
//   // ! state
//   const [isGoing, setIsGoing] = React.useState(true);
//   // ! handle click
//   function handleClick() {
//     setIsGoing((prevState) => !prevState);
//   }
//   return (
//     <div>
//       <GoOut isGoing={isGoing} handleClick={handleClick} />
//     </div>
//   );
// }

export default class GoOutParent extends React.Component {
  //! state in class based component
  state = {
    isGoing: true,
  };
  //! function
  // function handleClick(){
  //     this.setState((prevState) => !prevState);
  // }
  render() {
    return (
      <div>
        <GoOut isGoing={this.isGoing} handleClick={this.handleClick} />
      </div>
    );
  }
}
