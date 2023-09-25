import React from "react";
import Container from "react-bootstrap/Container";
import warning from "./asset/warning.gif";

function Error() {
  return (
    <div className="container">
      <div className="hero text-center  my-4">
        <h1 className="display-5">
          <i className="bi mx-3 text-center">
            {" "}
            <img
              src={warning}
              style={{ width: "200px", paddingTop: "30vh" }}
              alt="404 error"
            />{" "}
          </i>
        </h1>
        <h1 className="display-5 fw-bold">404 Not Found</h1>
        <p className="lead">
          We couldn't find what you're looking for on{" "}
          <em>
            <span id="display-domain"></span>
          </em>
          .
        </p>
      </div>
    </div>
  );
}

export default Error;
