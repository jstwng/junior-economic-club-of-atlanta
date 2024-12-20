function FAQ() {
  return (
    <>
      <h1 id="faq">Frequently Asked Questions</h1>
      <div style={{ marginBottom: "10px" }}></div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Is the Junior Economic Club a nonprofit or for-profit
              organization?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The Junior Economic Club is a registered, tax-exempt nonprofit
              organization with full 501(c)(3) status.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Does it cost money to participate in the Club - is there a
              membership fee?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              No, membership in the club is completely free.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How selective is the Club?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Acceptance rate varies from year to year, but remains selective.
              Applicants should demonstrate engagement, leadership, curiosity,
              and a drive to make an impact in their community. You can learn
              more under our Admissions tab.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What kinds of events does the Club host?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our hallmark events are our forums, which feature distinguished
              keynote speakers with careers in business, economics, finance, and
              entrepreneurship. JEC members have the opportunity to pose
              questions to these speakers, brainstorm new ideas and innovations,
              and connect with leading figures of Atlanta’s business world and
              other members from across the city. In addition to these quarterly
              forums, the Club hosts weekly seminars that offer exclusive
              insight into Atlanta’s business sectors. Past events include an
              exclusive tour of the Atlanta City Hall, a private book signing
              and lecture, and the opportunity to visit the Federal Reserve Bank
              of Atlanta.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What kinds of opportunities does the Club give to its members?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              JEC serves first and foremost as a platform of discussion for
              Atlanta’s determined and ambitious high school students.
              Membership also opens the door to an invaluable set of connections
              with motivated students in Atlanta and leading figures in
              Atlanta's business, economics, finance, and entrepreneurship
              sectors. JEC also offers exclusive access to a number of programs
              and internships, in addition to the events described above.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Do you have to be enrolled in an Economics course at your high
              school to become a member?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              No, many of the Club’s members are not enrolled in Economics
              courses at their high school. While it is necessary for Business,
              Economics, Finance, and/or Entrepreneurship to be a passion of
              every applicant, a course is not required, and not having taken
              one does not reflect negatively on an applicant.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              How is the Board of Directors structured?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The Junior Economic Club of Atlanta has a President and Vice
              President, nine board members, five committees, and a general
              member assembly of anywhere from 100-150 members (varies per
              year).
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
