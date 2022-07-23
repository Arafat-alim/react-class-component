import React from "react";

export default class LikeComponent extends React.Component {
  // ! constructor
  constructor() {
    super();
    this.contact = {
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false,
    };
  }

  toggleFavorite = () => {
    this.setState((prevState) => {
      return {
        isFavorite: !prevState.isFavorite,
      };
    });
  };
  render() {
    let starIcon = this.state.contact.isFavorite
      ? "star-filled.png"
      : "star-empty.png";
    return (
      <main>
        <article className="card">
          <img src="./images/user.png" className="card--image" alt="img" />
          <div className="card--info">
            <img
              src={`../images/${starIcon}`}
              className="card--favorite"
              onClick={this.toggleFavorite}
              alt="img"
            />
            <h2 className="card--name">
              {this.state.contact.firstName} {this.state.contact.lastName}
            </h2>
            <p className="card--contact">{this.state.contact.phone}</p>
            <p className="card--contact">{this.state.contact.email}</p>
          </div>
        </article>
      </main>
    );
  }
}
