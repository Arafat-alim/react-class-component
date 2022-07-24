import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isChecked: "",
    employement: "",
    favColor: "",
  };
  render() {
    return (
      <div>
        <h1>Form Component</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
          />
          <br />
          <textarea
            placeholder="Comment"
            name="comments"
            value={this.state.comments}
          />
          <br />
          <input
            type="checkbox"
            id="isFriendly"
            name="isChecked"
            value={this.state.isChecked}
          />
          <label htmlFor="isFriendly">Are you Friendly?</label>
          <fieldset>
            <legend>Current Employement Status</legend>
            <input
              type="radio"
              name="employment"
              id="unemployed"
              checked={this.state.employement === "unemployed"}
            />
            <label htmlFor="unemployed">Unemployment</label>
            <input
              type="radio"
              name="employment"
              id="part-time"
              checked={this.state.employement === "part-time"}
            />
            <label htmlFor="employed">Part Time</label>
            <input
              type="radio"
              name="employment"
              id="full-time"
              checked={this.state.employement === "full-time"}
            />
            <label htmlFor="full-time">Full Time</label>
          </fieldset>
          <br />
          <label htmlFor="favColor">What is your Favourite Color?</label>
          <br />
          <select name="favColor" id="favColor" value={this.state.favColor}>
            <option value="#">----Choose Any Option----</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
