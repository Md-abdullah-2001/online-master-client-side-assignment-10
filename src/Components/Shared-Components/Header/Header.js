import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import Img from "../../../../src/Assest/favicon.svg";

const Header = () => {
  return (
    // <Navbar bg="primary" variant="dark">
    //   <Container>
    //     <Image src={Img}></Image>
    //     <Navbar.Brand href="#home">Online-Master</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container">
        <Image src={Img}></Image>
        <a className="navbar-brand text-light fs-3" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-5 ms-5" id="navbarNav">
          <ul className="navbar-nav ms-5 ">
            <li className="nav-item">
              <a
                className="nav-link active text-light fs-5"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light fs-5 ms-4" href="/">
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5 ms-4" href="/">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5 ms-4" href="/">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
