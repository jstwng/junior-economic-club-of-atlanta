import { useState } from "react";
import logo from "./assets/logo.png";
import Bar from "./Bar.tsx";
import Landing from "./Landing.tsx";
import About from "./About.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        src={logo}
        style={{ display: "inline", marginLeft: "10px" }}
        alt="Logo"
        className="logo"
      />
      <div className="bar">
        <Bar />
      </div>
      <div style={{ marginBottom: "40px" }}></div>
      <div className="container">
        <Landing />
        <div style={{ marginBottom: "40px" }}></div>
        <About />
      </div>
    </>
  );
}

export default App;
