import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import {
  IoHome,
  IoCall,
  IoArrowDownCircleSharp,
  IoInformationCircle,
} from "react-icons/io5";
import BrandLogo from "./asset/Brand logo.png";
import pricing from "./Pricing";

const Navbars = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img src={BrandLogo} alt="logo" srcset="" /> K2H
          </Navbar.Brand>
          <Nav className="me-auto navlinks">
            <Nav.Link href="/">
              <IoHome /> Home
            </Nav.Link>
            <Nav.Link href="/featuresgh">
              <IoArrowDownCircleSharp /> Features
            </Nav.Link>
            <Nav.Link href="/contactform">
              {" "}
              <IoCall /> Contact
            </Nav.Link>
            <Nav.Link href="/About">
              <IoInformationCircle /> About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
      
  );
};

export default Navbars;
