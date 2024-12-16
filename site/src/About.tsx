import partnerOne from "./assets/partnerOne.png";
import partnerTwo from "./assets/partnerTwo.png";
import partnerThree from "./assets/partnerThree.png";
import partnerFour from "./assets/partnerFour.png";
import partnerFive from "./assets/partnerFive.png";
import partnerSix from "./assets/partnerSix.png";
import partnerSeven from "./assets/partnerSeven.png";
import partnerEight from "./assets/partnerEight.png";
import partnerNine from "./assets/partnerNine.png";
import partnerTen from "./assets/partnerTen.png";

function About() {
  return (
    <>
      <h1>About Us</h1>
      <div className="about">
        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Applying</h2>
          <h3>
            Membership is rolling. Any and all high school students (grades
            9-12) in the Atlanta area may apply. Applications are competitive.
          </h3>
        </div>
        <a href="board-of-directors.html">
          <div className="aboutComponent">
            <h2 style={{ lineHeight: "100%" }}>Board of Directors</h2>
            <h3>
              Our student-led Board of Directors liases with the National Board
              and organizes regular programming for the Club's members.
            </h3>
          </div>
        </a>

        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Board of Advisors</h2>
          <h3>
            Our Board of Advisors is comprised of Atlanta-area industry
            professionals who provide guidance on the Club's operations.
          </h3>
        </div>
      </div>
      <div className="about">
        <a href="alumni.html">
          <div className="aboutComponent">
            <h2 style={{ lineHeight: "100%" }}>Alumni Network</h2>
            <h3>
              Junior Economic Club of Atlanta members who have graduated high
              school and are now in college or starting their careers.
            </h3>
          </div>
        </a>

        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>The Catalyst Program</h2>
          <h3>
            A year-long, cohort-based incubator for non-seniors. 6 students
            receive up to $2,000 in funding and 3 mentors each.
          </h3>
        </div>
        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Atlanta Junior Economist</h2>
          <h3>
            The Club's in-house, monthly Economics journal. Produced <em>by</em>{" "}
            students, <em>for</em> students. Members may apply to work as staff.
          </h3>
        </div>
      </div>
      <h2
        style={{
          lineHeight: "100%",
          paddingTop: "16px",
          paddingBottom: "20px",
        }}
      >
        Our Corporate Sponsor and Past Partners
      </h2>
      <div className="about">
        <a
          href="https://www.invesco.com/us/en/Individual-investor.html"
          target="_blank"
        >
          <div className="sponsorImage">
            <img
              src={partnerOne}
              style={{
                display: "inline",
                width: "180px",
                height: "160px",
              }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
              }}
            >
              Invesco
            </h3>
          </div>
        </a>

        <a href="https://www.atlantaga.gov/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerTwo}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
                maxWidth: "160px",
              }}
            >
              City of Atlanta Department of Finance
            </h3>
          </div>
        </a>

        <a href="https://www.atlantafed.org/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerThree}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
                maxWidth: "160px",
              }}
            >
              Federal Reserve Bank of Atlanta
            </h3>
          </div>
        </a>

        <a href="https://www.emory.edu/home/index.html" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerFour}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
              }}
            >
              Emory University
            </h3>
          </div>
        </a>

        <a href="https://www.wellsfargo.com/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerFive}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
              }}
            >
              Wells Fargo
            </h3>
          </div>
        </a>
      </div>
      <div style={{ marginBottom: "10px" }}></div>
      <div className="about">
        <a href="https://www.gatech.edu/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerSix}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
                maxWidth: "160px",
              }}
            >
              Georgia Institute of Technology
            </h3>
          </div>
        </a>

        <a href="https://www.legis.ga.gov/house" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerSeven}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
                maxWidth: "160px",
              }}
            >
              Georgia House of Representatives
            </h3>
          </div>
        </a>
        <a href="https://www.atlantaventures.com/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerEight}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
              }}
            >
              Atlanta Ventures
            </h3>
          </div>
        </a>
        <a href="https://www.equifax.com/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerNine}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
              }}
            >
              Equifax
            </h3>
          </div>
        </a>
        <a href="https://www.janney.com/" target="_blank">
          <div className="sponsorImage">
            <img
              src={partnerTen}
              style={{ display: "inline", width: "180px", height: "160px" }}
              alt="Logo"
              className="logo"
            />
            <h3
              style={{
                display: "inline",
                fontWeight: "100",
              }}
            >
              Janney Montgomery Scott
            </h3>
          </div>
        </a>
      </div>
      <div style={{ marginBottom: "80px" }}></div>
    </>
  );
}

export default About;
