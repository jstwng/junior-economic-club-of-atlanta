function Bar() {
  return (
    <>
      <div style={{ paddingRight: "16px" }}>
        <a href="index.html">
          <h1 className="bar-title">Home</h1>
        </a>
        <a href="index.html#about">
          <h1 className="bar-title">About</h1>
        </a>
        <a href="index.html#catalyst">
          <h1 className="bar-title">The Catalyst Program</h1>
        </a>
        <a href="index.html#faq">
          <h1 className="bar-title">FAQs</h1>
        </a>
        <a href="apply.html">
          <h1 className="bar-title">Apply</h1>
        </a>
      </div>
    </>
  );
}

export default Bar;
