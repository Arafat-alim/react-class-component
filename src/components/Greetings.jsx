import React from "react";

export default function Greetings() {
  const date = new Date();
  const hours = date.getHours();
  let data;
  console.log(hours);
  if (hours < 12) {
    data = "Morning";
  } else if (hours >= 12 && hours < 17) {
    data = "Afternoon";
  } else {
    data = "Night";
  }
  return (
    <div>
      <h1>Good {data} to you, Sir or Madam</h1>
    </div>
  );
}
