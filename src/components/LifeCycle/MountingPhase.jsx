import React from "react";

export default class MountingPhase extends React.Component {
  //state
  state = {
    character: {},
  };
  //mounting
  componentDidMount() {
    console.log("Mounting phase");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => this.setState({ character: data }));
  }
  render() {
    console.log("Fetch Component - Render method");
    return (
      <div>
        <h1>Mounting Phase</h1>
        <p>{this.state.character.name}</p>
      </div>
    );
  }
}
