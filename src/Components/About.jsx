import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg1 from "./asset/About 1.png"
const About = () => {
  return (
    <div className="container" style={{paddingTop: "100px"}}>
      <div className="row">
        <div className="col-3 pb-5">
          <h1>About</h1>
        </div>
      </div>
      <div className="row">
        <div className="col float-start scale-up-center">
          <img src={aboutimg1} alt="" srcset="" />
        </div>
        <div className="col tracking-in-expand" style={{paddingTop: "100px"}}><h5 className="tracking-in-expand">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit obcaecati perspiciatis autem deserunt illum debitis. Voluptatibus nemo dicta quasi eveniet expedita sunt optio, eum incidunt voluptas consequatur dolores nesciunt praesentium deleniti at cupiditate a. Hic, voluptates, nulla beatae corporis consectetur accusamus voluptatem impedit nisi quia delectus porro vitae nobis nostrum!</h5></div>
        {/* <div className="col"></div> */}
      </div>
      <br />
      
    </div>
  );
};

export default About;
