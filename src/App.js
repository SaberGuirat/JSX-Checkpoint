import React from "react";
import "./App.css";
import "./style.css";
import imageInSrc from "./img.png";

function App() {
  let name = "Saber Guirat";

  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">{name}</h1>
        <br />
        <img src={imageInSrc} alt="in source" />
        <br />
        <img src="img.png" alt="in public" />
      </div>
      <video style={{ width: "320px", height: "240px" }} controls>
        <source src="/react.mp4"></source>
      </video>
    </div>
  );
}

export default App;
