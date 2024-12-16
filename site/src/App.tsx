import logo from "./assets/logo.png";
import Bar from "./Bar.tsx";
import About from "./About.tsx";
import Carousel from "./Carousel.tsx";
import Catalyst from "./Catalyst.tsx";
import FAQ from "./FAQ.tsx";
import Footer from "./Footer.tsx";

import "./App.css";

function App() {
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
      <div style={{ marginBottom: "50px" }}></div>
      <div className="myContainer">
        <Carousel />
        <About />
        <Catalyst />
        <FAQ />
        <div style={{ height: "100px" }}></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
