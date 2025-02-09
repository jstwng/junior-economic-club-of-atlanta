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
          site="construction.html"
        />
        <Profile
          imageSrc={Sam}
          name="Samhitha Kovi"
          position="Vice President, '24-25"
          additional="Lambert High School"
          site="construction.html"
        />
        <Profile
          imageSrc={Nevin}
          name="Nevin Kunampuram"
          position="Director of Events, '24-25"
          additional="Stanford University"
          site="construction.html"
        />
        <Profile
          imageSrc={Anant}
          name="Anant Verma"
          position="Chief Marketing Officer, '24-25"
          additional="West Forsyth High School"
          site="construction.html"
        />
      </div>
      <div className="about">
        <Profile
          imageSrc={Yohan}
          name="Yohan Kim"
          position="Director of Strategic Initiatives, '24-25"
          additional="Gwinnett School of Science, Math, and Technology"
          site="construction.html"
        />
        <Profile
          imageSrc={Vivan}
          name="Vivan Kotla"
          position="Community Outreach Chair, '24-25"
          additional="Lambert High School"
          site="construction.html"
        />
        <Profile
          imageSrc={Yinan}
          name="Yinan Chen"
          position="Director of the Junior Economist, '24-25"
          additional="Gwinnett School of Science, Math, and Technology"
          site="construction.html"
        />
        <Profile
          imageSrc={Marquitta}
          name="Marquitta Moore"
          position="Director of Communications, '24-25"
          additional="Archer High School"
          site="construction.html"
        />
      </div>
    </div>

    <Footer />
  </StrictMode>
);
