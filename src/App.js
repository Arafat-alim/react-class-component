import React from "react";
import Greetings from "./components/Greetings";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="Arafat" />
        <Greetings />
      </div>
    );
  }
}
