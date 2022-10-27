import React, { useState } from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img from "../../../../src/Assest/favicon.svg";
import { ContextProvider } from "../../../Context/ContextData";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logUserOut } = useContext(ContextProvider);
  const [isEnabled, setIsEnabled] = useState(false);

  const logOutBtn = () => {
    logUserOut().then(() => {});
  };
  return (
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid">
        <Image src={Img}></Image>
        <Link to="/" className="navbar-brand text-light fs-3" href="/">
          Online-Master
        </Link>
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
        <div className="collapse navbar-collapse ps-5 ms-3" id="navbarNav">
          <ul className="navbar-nav ms-5 ">
            <li className="nav-item">
              <Link className="nav-link active text-light fs-5" to="/home">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="courses"
                className="nav-link  text-light fs-5 ms-4"
                href="/"
              >
                COURSES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blogs"
                className="nav-link text-light fs-5 ms-4"
                href="/"
              >
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5 ms-4" href="/">
                FAQ
              </a>
            </li>

            {user?.uid ? (
              <>
                <li className="nav-item text-light fs-5 ms-4 mt-2">
                  <Button variant="danger" onClick={logOutBtn}>
                    {" "}
                    LOG-OUT
                  </Button>
                </li>
                <Image
                  title={user.displayName}
                  roundedCircle
                  style={{ height: "40px", width: "50px", margin: "10px" }}
                  src={user.photoURL}
                ></Image>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-light fs-5 ms-4">
                    LOG-IN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link text-light fs-5 ms-4"
                  >
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {isEnabled ? (
          <FaToggleOn
            className="fs-2  text-light"
            onClick={() => setIsEnabled(!isEnabled)}
          />
        ) : (
          <FaToggleOff
            className="fs-2  text-light"
            onClick={() => setIsEnabled(!isEnabled)}
          />
        )}
      </div>
    </nav>
    //
  );
};

export default Header;
