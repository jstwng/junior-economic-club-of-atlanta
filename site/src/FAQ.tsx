function FAQ() {
  return (
    <>
      <div className="mb-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-10">
              <div className="d-flex align-items-end mb-5">
                <i className="bi bi-person-gear me-3 lh-1 display-5"></i>
                <h2>Your Account</h2>
              </div>
            </div>
            <div className="col-11 col-xl-10">
              <div className="accordion accordion-flush" id="faqAccount">
                {[
                  {
                    id: 1,
                    question:
                      "Is the Junior Economic Club a nonprofit or for-profit organization? ",
                    answer:
                      "The Junior Economic Club is a registered, tax-exempt nonprofit organization with full 501(c)(3) status.",
                  },
                  {
                    id: 2,
                    question:
                      "Does it cost money to participate in the Club - is there a membership fee? ",
                    answer: "No, membership in the club is completely free.",
                  },
                  {
                    id: 3,
                    question: "How selective is the Club?",
                    answer:
                      "Acceptance rate varies from year to year, but remains selective. Applicants should demonstrate engagement, leadership, curiosity, and a drive to make an impact in their community. If you have any questions, feel free to email us at atlantaboard@junioreconomicclub.org.",
                  },
                  {
                    id: 4,
                    question: "What should I do if I forget my password?",
                    answer:
                      "If you forget your password, most websites and services offer a 'Forgot Password' or 'Reset Password' option. Follow the steps to reset your password, often involving an email or SMS verification.",
                  },
                  {
                    id: 5,
                    question:
                      "What should I do if my account is compromised or hacked?",
                    answer:
                      "If you suspect your account has been compromised, change your password immediately. Contact the service provider for further assistance, and consider enabling two-factor authentication for added security.",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="accordion-item bg-transparent border-bottom py-3"
                  >
                    <h2
                      className="accordion-header"
                      id={`faqAccountHeading${item.id}`}
                    >
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faqAccountCollapse${item.id}`}
                        aria-expanded="false"
                        aria-controls={`faqAccountCollapse${item.id}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`faqAccountCollapse${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`faqAccountHeading${item.id}`}
                    >
                      <div className="accordion-body">
                        <h3>{item.answer}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
