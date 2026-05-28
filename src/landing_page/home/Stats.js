import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col-6 mt-5 p-3">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer first always</h2>
          <p className="text-muted">
            That’s why 1.3+ crore users trust us for delivering reliable,
            secure, and user-friendly solutions tailored to their needs.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, or annoying notifications. High quality features
            that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just a platform, but a complete ecosystem designed to provide
            tools and services that simplify your workflow.
          </p>

          <h2 className="fs-4">Do better with technology</h2>
          <p className="text-muted">
            With smart initiatives and seamless experiences, we don’t just
            provide services, but actively help you do better with technology.
          </p>
        </div>
        <div className="col-6 mt-5 p-3">
          <img
            src="media/images/ecosystem.png"
            alt="Stats"
            style={{ width: "90%" }}
          />
          <div className=" text-center">
          <a href="/"  className="mx-5" style={{textDecoration:"none"}}>
            Explore our products <i class="fa-solid fa-arrow-right-long"></i>
          </a>

          <a href="/"  className="ms-3" style={{textDecoration:"none"}}>
            Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
