import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./assets/logo.png";
import Bar from "./Bar.tsx";
import Footer from "./Footer.tsx";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="bar">
        <Bar />
      </div>
    </div>
    <div style={{ marginBottom: "100px" }}></div>
    <div className="myContainer">
      <h1>Membership Application</h1>
    </div>

    <Footer />
  </StrictMode>
);
