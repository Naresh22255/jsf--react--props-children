import React from "react";
import Panel from "./Panel";

export default function App() {
  return (
    <div className="App">
      <h1>Noroff Task</h1>
      <Panel heading="This is heading">
        <p>
          <img
            src="https://cdn.pixabay.com/photo/2018/06/30/09/31/background-image-3507320_1280.jpg"
            alt=""
          ></img>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          quos, sint architecto, suscipit voluptatum, quia consequuntur placeat
          atque neque a adipisci animi dignissimos maiores rerum iure at vitae?
          Unde, reprehenderit.
        </p>
      </Panel>
    </div>
  );
}
