import React from "react";
import CurrentWidth from "./CurrentWidth";

export default class MainCurrent extends React.Component {
  state = {
    isToggle: true,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        isToggle: !prevState.isToggle,
      };
    });
  };
  render() {
    const styles = {
      width: "200px",
      backgroundColor: "smokewhite",
      margin: "10px",
    };
    return (
      <div>
        <button style={styles} onClick={this.toggle}>
          Hello
        </button>
        {this.state.isToggle && <CurrentWidth />}
      </div>
    );
  }
}
