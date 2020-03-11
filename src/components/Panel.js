import React from "react";

export default function Panel(props) {
  const text = "Lorem ipsum dolor sit ";

  const image =
    "https://cdn.pixabay.com/photo/2018/06/30/09/31/background-image-3507320_1280.jpg";

  const alter = "sample";
  return (
    <div>
      <h2>{props.heading}</h2>

      {props.children}
    </div>
  );
}
