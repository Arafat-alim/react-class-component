import React from "react";

export default class FetchingGuide extends React.Component {
  //creating states
  state = {
    count: 1,
    character: {},
  };

  //creating function
  handleInc = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  handleDec = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  getStarWarsCharacter = (id) => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ character: data }));
  };
  componentDidMount(id) {
    this.getStarWarsCharacter(this.state.count);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.count !== this.state.count) {
      this.getStarWarsCharacter(this.state.count);
    }
  }

  render() {
    return (
      <div>
        <h1>Fetching Stars wars Character</h1>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleInc}>+</button>
          <button onClick={this.handleDec}>-</button>
        </div>
        <div>
          <h1>
            Star Wars Character - {this.state.character.name || "Loading..."}
          </h1>
        </div>
      </div>
    );
  }
}
