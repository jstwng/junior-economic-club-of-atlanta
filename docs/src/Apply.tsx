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
      <div style={{ marginBottom: "20px" }}></div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScPoGnBGtHOvwhHa6uIn8ybPh_-U0Iai8D7adgFGDJR2PYVCQ/viewform?embedded=true"
        width="100%"
        height="800px"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
    <Footer />
  </StrictMode>
);
