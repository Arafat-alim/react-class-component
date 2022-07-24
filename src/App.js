import React from "react";
import Form from "./components/LifeCycle/Form";

export default class App extends React.Component {
  render() {
    console.log("App - Render Method");
    return (
      <div>
        <Form />
      </div>
    );
  }
}
