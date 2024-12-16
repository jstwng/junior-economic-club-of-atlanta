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
import Iian from "./assets/iian.jpeg";
import Julian from "./assets/julian.jpeg";
import Rachna from "./assets/rachna.jpeg";
import Michael from "./assets/michael.jpg";
import Rohan from "./assets/rohan.png";
import Roy from "./assets/roy.jpeg";
import Shivani from "./assets/shivani.jpeg";
import Sarah from "./assets/sarah.jpeg";
import Margaret from "./assets/margaret.jpeg";
import Young from "./assets/young.jpeg";
import Anish from "./assets/anish.jpeg";
import Shaomin from "./assets/shaomin.jpeg";
import Sanjar from "./assets/sanjar.jpeg";
import Vasu from "./assets/vasu.jpeg";

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
          site="https://www.linkedin.com/in/rohan-movva/"
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
      <div className="about" style={{ paddingTop: "20px" }}>
        <Profile
          imageSrc={Anish}
          name="Anish Madireddy"
          position="Member, '23-24"
          additional="Brown University"
          site="https://www.linkedin.com/in/anish-madireddy-205874244/"
        />
        <Profile
          imageSrc={Shaomin}
          name="Shaomin Kee"
          position="Member, '23-24"
          additional="Wharton School of Business"
          site="https://www.linkedin.com/in/shaomin-kee-467909224/"
        />
        <Profile
          imageSrc={Sanjar}
          name="Sanjar Zaman"
          position="Member, '23-24"
          additional="Columbia University"
          site="https://www.linkedin.com/in/sanjar-zaman/"
        />
        <Profile
          imageSrc={Vasu}
          name="Vasu Dwivedi"
          position="Member, '23-24"
          additional="University of Pennsylvania"
          site="https://www.linkedin.com/in/suyash-vasu-dwivedi/"
        />
      </div>
      <div className="about" style={{ paddingTop: "20px" }}>
        <Profile
          imageSrc={Sarah}
          name="Sarah Bellagat"
          position="Member, '22-23"
          additional="Harvard University"
          site="https://www.linkedin.com/in/sarah-bellagat/"
        />
        <Profile
          imageSrc={Margaret}
          name="Margaret Song"
          position="Member, '21-22"
          additional="Georgia Institute of Technology"
          site="https://www.linkedin.com/in/margaretasong/"
        />
        <Profile
          imageSrc={Young}
          name="Young Cho"
          position="Member, '21-22"
          additional="Georgia Institute of Technology"
          site="https://www.linkedin.com/in/youngch03/"
        />
        <Profile
          imageSrc={Shivani}
          name="Shivani Desai"
          position="Member, '20-21"
          additional="Wharton School of Business"
          site="https://www.linkedin.com/in/shivanidesaipage/"
        />
      </div>
    </div>
    <Footer />
  </StrictMode>
);
