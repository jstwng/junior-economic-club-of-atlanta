import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";

function Carousel() {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={one}
              style={{ display: "inline", marginLeft: "10px", width: "100%" }}
              alt="JEC Atlanta Economic Roundtable"
              className="roundtable"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 style={{ lineHeight: "1" }}>
                  Join Atlanta's best and brightest students in solving{" "}
                  <em>real-world</em> economic problems.
                </h1>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Apply Today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={two}
              style={{ display: "inline", marginLeft: "10px", width: "100%" }}
              alt="JEC Atlanta Economic Roundtable"
              className="roundtable"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1 style={{ lineHeight: "1" }}>
                  Connect with peers and industry professionals in business
                  settings.
                </h1>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    About Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={three}
              style={{ display: "inline", marginLeft: "10px", width: "100%" }}
              alt="JEC Atlanta Economic Roundtable"
              className="roundtable"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>
                  Led <em>by</em> students, <em>for</em> students.
                </h1>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Board of Directors
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ marginBottom: "40px" }}></div>
    </>
  );
}

export default Carousel;
