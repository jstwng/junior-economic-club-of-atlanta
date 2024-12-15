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
        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Board of Directors</h2>
          <h3>
            Our student-led Board of Directors liases with the National Board
            and organizes regular programming for the Club's members.
          </h3>
        </div>
        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Board of Advisors</h2>
          <h3>
            Our Board of Advisors is comprised of Atlanta-area industry
            professionals who provide guidance on the Club's operations.
          </h3>
        </div>
      </div>
      <div className="about">
        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Alumni Network</h2>
          <h3>
            Junior Economic Club of Atlanta members who have graduated high
            school and are now in college or starting their careers.
          </h3>
        </div>
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
      <div className="about">
        <div className="aboutComponent">
          <h2 style={{ lineHeight: "100%" }}>Our Partners and Sponsors</h2>
        </div>
      </div>
      <div style={{ marginBottom: "40px" }}></div>
    </>
  );
}

export default About;
