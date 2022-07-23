import React from "react";

// export default function Header(props) {
//   return (
//     <div>
//       <p>Welcome, {props.name}</p>
//     </div>
//   );
// }

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
      </div>
    );
  }
}
