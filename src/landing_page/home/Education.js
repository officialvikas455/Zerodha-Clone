import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* Left Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src="/media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Content Section */}
        <div className="col-6">
          <h1 className=" mb-4">
            Free and open market education
          </h1>

          <p className="text-muted fs-5">
            Versity, the largest online stock market education platform,
            covering everything from basic concepts to advanced trading
            strategies in a simple and practical way.
          </p>

          <a
            href="/"
            className="text-decoration-none fw-semibold"
          >
            Versity{" "}
            <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>

          <p className="text-muted fs-5 mt-4">
            Trading and Q&A, one of the most engaging communities for traders
            and investors to discuss markets, share strategies, and solve
            queries together.
          </p>

          <a
            href="/"
            className="text-decoration-none fw-semibold"
          >
            Trading and Q&A{" "}
            <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;