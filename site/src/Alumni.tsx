import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./assets/logo.png";
import Bar from "./Bar.tsx";
import Profile from "./Profile.tsx";
import Footer from "./Footer.tsx";
import "./App.css";

import Justin from "./assets/justin.jpg";
import Jillian from "./assets/jillian.jpeg";
import Iian from "./assets/iian.jpg";
import Julian from "./assets/julian.jpg";
import Rachna from "./assets/rachna.jpeg";
import Michael from "./assets/michael.jpg";
import Rohan from "./assets/rohan.png";
import Roy from "./assets/roy.jpeg";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <img
      src={logo}
      style={{ display: "inline", marginLeft: "10px" }}
      alt="Logo"
      className="logo"
    />
    <div className="bar">
      <Bar />
    </div>
    <div style={{ marginBottom: "50px" }}></div>
    <div className="myContainer">
      <h1>Alumni Network</h1>
      <div className="about" style={{ paddingTop: "20px" }}>
        <Profile
          imageSrc={Justin}
          name="Justin Wang"
          position="President, '23-24"
          additional="Stanford University"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Julian}
          name="Julian Varga"
          position="Vice President, '23-24"
          additional="Georgia Institute of Technology"
          site="https://www.linkedin.com/in/julian-varga-852593251/"
        />
        <Profile
          imageSrc={Jillian}
          name="Jillian Vacha"
          position="Chief Marketing Officer, '23-24"
          additional="Princeton University"
          site="https://www.linkedin.com/in/jillian-vacha/"
        />
        <Profile
          imageSrc={Iian}
          name="Iian Chen"
          position="Chief Financial Officer, '23-24"
          additional="Wharton School of Business"
          site="https://www.linkedin.com/in/iianchen/"
        />
      </div>
      <div className="about" style={{ paddingTop: "20px" }}>
        <Profile
          imageSrc={Rachna}
          name="Rachna Rajesh"
          position="President, '22-23"
          additional="Georgia Institute of Technology"
          site="https://www.linkedin.com/in/rachna-rajesh/"
        />
        <Profile
          imageSrc={Rohan}
          name="Rohan Movva"
          position="Chief Marketing Officer, '22-23"
          additional="Stanford University"
          site="https://www.linkedin.com/in/rachna-rajesh/"
        />
        <Profile
          imageSrc={Roy}
          name="Roy Lee"
          position="Vice President, '21-22"
          additional="Columbia University"
          site="https://www.linkedin.com/in/roy-lee-swe/"
        />
        <Profile
          imageSrc={Michael}
          name="Michael Istakhorov"
          position="President, '20-21"
          additional="University of Georgia"
          site="https://www.linkedin.com/in/rohan-movva/"
        />
      </div>
    </div>
    <Footer />
  </StrictMode>
);
