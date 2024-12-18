import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./assets/logo.png";
import Bar from "./Bar.tsx";
import Profile from "./Profile.tsx";
import Footer from "./Footer.tsx";
import "./App.css";

import Neal from "./assets/Neal.png";
import Sam from "./assets/sam.png";
import Anant from "./assets/anant.png";
import Nevin from "./assets/nevin.png";
import Yohan from "./assets/yohan.png";
import Vivan from "./assets/vivan.png";
import Yinan from "./assets/yinan.png";
import Marquitta from "./assets/marquitta.png";
import Arhan from "./assets/arhan.png";

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
      <h1>Board of Directors</h1>
      <div className="about" style={{ paddingTop: "20px" }}></div>
      <div className="about">
        <Profile
          imageSrc={Neal}
          name="Neal Karani"
          position="President, '24-25"
          additional="Stanford University"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Sam}
          name="Samhitha Kovi"
          position="Vice President, '24-25"
          additional="Lambert High School"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Nevin}
          name="Nevin Kunampuram"
          position="Director of Events, '24-25"
          additional="Stanford University"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Anant}
          name="Anant Verma"
          position="Chief Marketing Officer, '24-25"
          additional="West Forsyth High School"
          site="https://www.linkedin.com/in/jstwng/"
        />
      </div>
      <div className="about">
        <Profile
          imageSrc={Yohan}
          name="Yohan Kim"
          position="Director of Strategic Initiatives, '24-25"
          additional="Gwinnett School of Science, Math, and Technology"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Vivan}
          name="Vivan Kotla"
          position="Community Outreach Chair, '24-25"
          additional="Lambert High School"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Yinan}
          name="Yinan Chen"
          position="Director of the Junior Economist, '24-25"
          additional="Gwinnett School of Science, Math, and Technology"
          site="https://www.linkedin.com/in/jstwng/"
        />
        <Profile
          imageSrc={Marquitta}
          name="Marquitta Moore"
          position="Director of Communications, '24-25"
          additional="Archer High School"
          site="https://www.linkedin.com/in/jstwng/"
        />
      </div>
      <div className="about">
        <Profile
          imageSrc={Arhan}
          name="Arhan Barve"
          position="Arhan Barve, '24-25"
          additional="Arhan Barve High School"
          site="https://www.linkedin.com/in/jstwng/"
        />
      </div>
    </div>

    <Footer />
  </StrictMode>
);
