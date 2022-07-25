import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employement: "",
    favColor: "",
  };

  handleChange = (event) => {
    // console.log(e.target.value);
    const { name, type, checked, value } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("formData")));
  }
  componentDidUpdate() {
    localStorage.setItem("formData", JSON.stringify(this.state));
  }
  render() {
    return (
      <div>
        <h1>Form Component</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            placeholder="Comment"
            name="comments"
            value={this.state.comments}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="checkbox"
            id="isFriendly"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          <label htmlFor="isFriendly">Are you Friendly?</label>
          <fieldset>
            <legend>Current Employement Status</legend>
            <input
              type="radio"
              name="employement"
              id="unemployed"
              value="unemployed"
              checked={this.state.employement === "unemployed"}
              onChange={this.handleChange}
            />
            <label htmlFor="unemployed">Unemployment</label>
            <input
              type="radio"
              name="employement"
              id="part-time"
              value="part-time"
              checked={this.state.employement === "part-time"}
              onChange={this.handleChange}
            />
            <label htmlFor="employed">Part Time</label>
            <input
              type="radio"
              name="employement"
              value="full-time"
              id="full-time"
              checked={this.state.employement === "full-time"}
              onChange={this.handleChange}
            />
            <label htmlFor="full-time">Full Time</label>
          </fieldset>
          <br />
          <label htmlFor="favColor">What is your Favourite Color?</label>
          <br />
          <select
            name="favColor"
            id="favColor"
            value={this.state.favColor}
            onChange={this.handleChange}
          >
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
