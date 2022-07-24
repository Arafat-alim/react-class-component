import React from "react";
import MountingPhase from "./components/LifeCycle/MountingPhase";

export default class App extends React.Component {
  render() {
    console.log("App - Render Method");
    return (
      <div>
        <MountingPhase />
      </div>
    );
  }
}
