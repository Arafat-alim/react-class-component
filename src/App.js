import React from "react";
import FetchingGuide from "./components/LifeCycle/FetchingGuide";

export default class App extends React.Component {
  render() {
    console.log("App - Render Method");
    return (
      <div>
        <FetchingGuide />
      </div>
    );
  }
}
