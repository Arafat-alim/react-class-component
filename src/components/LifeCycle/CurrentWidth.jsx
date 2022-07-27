import React from "react";

export default class CurrentWidth extends React.Component {
  state = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  };
  watchFun = () => {
    this.setState({ innerWidth: window.innerWidth });
  };

  watchHeight = () => {
    this.setState({ innerHeight: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.watchFun);
    window.addEventListener("resize", this.watchHeight);
  }
  //cleaning sidewffect
  componentWillUnmount() {
    window.removeEventListener("resize", this.watchFun);
    window.removeEventListener("resize", this.watchHeight);
  }

  render() {
    return (
      <div>
        <h1>Current Width: {this.state.innerWidth}</h1>
        <h1>Current Height: {this.state.innerHeight}</h1>
        {console.log(this.state.innerWidth)}
      </div>
    );
  }
}
