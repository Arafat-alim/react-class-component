import React from "react";

// export default function Counter() {
//   const [count, setCount] = React.useState(0);
//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }
//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//   }
//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={subtract}>
//         –
//       </button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// }

export default class Counter extends React.Component {
  //   const [count, setCount] = React.useState(0);
  //! Creating a constructor
  constructor() {
    super();
    this.state = { count: 0 };

    //bind - when we are dealing with normal function
    this.add = this.add.bind(this);
  }
  //if we want to access this type of function for dealing with setState method, then we have to use constructor
  // for binding and removing the error
  add() {
    // setCount((prevCount) => prevCount + 1);
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  subtract = () => {
    // setCount((prevCount) => prevCount - 1);
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  render() {
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>
          –
        </button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}
