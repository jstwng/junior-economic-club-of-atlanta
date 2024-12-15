function Catalyst() {
  return (
    <>
      <h1>The Catalyst Program</h1>
      <h2 style={{ fontWeight: "100" }}>
        The Junior Economic Club of Atlanta's mission is to invest in Atlanta's
        future by preparing students to solve real-world economic problems in
        the public and private sectors. Through the Catalyst Program, 6
        non-seniors are put through a year-long, cohort-based incubator. These
        students will have access to mentors and financial resources that can
        transform ideas into impactful projects.
      </h2>
      <div className="about">
        <div className="catalystComponent">
          <h4 style={{ display: "inline", marginRight: "10px" }}>6</h4>
          <h2 style={{ display: "inline", fontWeight: "100" }}>students.</h2>
        </div>
        <div className="catalystComponent">
          <h4 style={{ display: "inline", marginRight: "10px" }}>3</h4>
          <h2 style={{ display: "inline", fontWeight: "100" }}>groups.</h2>
        </div>
        <div className="catalystComponent">
          <h4 style={{ display: "inline", marginRight: "10px" }}>$12,000</h4>
          <h2 style={{ display: "inline", fontWeight: "100" }}>in funding.</h2>
        </div>
        <div className="catalystComponent">
          <h4 style={{ display: "inline", marginRight: "10px" }}>6</h4>
          <h2 style={{ display: "inline", fontWeight: "100" }}>
            industry mentors.
          </h2>
        </div>
      </div>
      <div style={{ marginBottom: "80px" }}></div>
    </>
  );
}

export default Catalyst;
