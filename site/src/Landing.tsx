import roundtable from "./assets/roundtable.jpg";

function Landing() {
  return (
    <>
      <h1 style={{ fontSize: "55px" }}>
        Join Atlanta's best and brightest students in solving{" "}
        <em>real-world</em> economic problems.
      </h1>
      <div className="imageContainer">
        <img
          src={roundtable}
          style={{ display: "inline", marginLeft: "10px" }}
          alt="JEC Atlanta Economic Roundtable"
          className="roundtable"
        />
      </div>
    </>
  );
}

export default Landing;
