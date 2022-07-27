import React from "react";

export default class CurrentWidth extends React.Component {
  state = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Current Width: {this.state.innerWidth}</h1>
        <h1>Current Height: {this.state.innerHeight}</h1>
        <P>sAVING dUMB</P>
      </div>
    );
  }
}
