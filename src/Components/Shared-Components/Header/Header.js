import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import Img from "../../../../src/Assest/favicon.svg";

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggler = () => {
    setIsEnabled(true);
    console.log("clicked");

    return <FaToggleOn></FaToggleOn>;
  };
  return (
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container">
        <Image src={Img}></Image>
        <a className="navbar-brand text-light fs-3" href="/">
          Online-Master
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
          <FaToggleOff
            onClick={toggler}
            className="fs-2 ms-3 text-light"
          ></FaToggleOff>
        </div>
      </div>
    </nav>
  );
};

export default Header;
