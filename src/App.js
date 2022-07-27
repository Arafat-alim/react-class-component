import React from "react";

import MainCurrent from "./components/LifeCycle/MainCurrent";

export default class App extends React.Component {
  render() {
    console.log("App - Render Method");
    return (
      <div>
        <MainCurrent />
      </div>
    );
  }
}
