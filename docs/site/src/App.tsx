import logo from "./assets/logo.png";
import Bar from "./Bar.tsx";
import About from "./About.tsx";
import Carousel from "./Carousel.tsx";
import Catalyst from "./Catalyst.tsx";
import FAQ from "./FAQ.tsx";
import skyline from "./assets/skyline.jpg";
import Footer from "./Footer.tsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="image-container">
        <img src={skyline} alt="Background" className="cropped-image" />
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="bar">
            <Bar />
          </div>
        </div>
        <h6 className="centered-text">JUNIOR ECONOMIC CLUB OF ATLANTA</h6>
      </div>
      <div style={{ marginBottom: "20px" }}></div>
      <div className="myContainer">
        <Carousel />
        <About />
        <Catalyst />
        <FAQ />
        <div style={{ height: "50px" }}></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
