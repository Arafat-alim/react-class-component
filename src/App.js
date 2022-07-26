import React from "react";
import CurrentWidth from "./components/LifeCycle/CurrentWidth";

export default class App extends React.Component {
  render() {
    console.log("App - Render Method");
    return (
      <div>
        <CurrentWidth />
      </div>
    );
  }
}
