import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../Assest/img1.jpg";
import img2 from "../../Assest/img2.jpg";
import img3 from "../../Assest/img3.jpg";

const Home = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={500}>
          <div style={{ position: "relative" }}>
            <img
              className="d-block w-100 opacity-50"
              src={img1}
              alt="First slide"
              style={{ maxHeight: "590px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "35px",
                left: "50%",
              }}
            >
              <h3
                class="fw-bold "
                style={{
                  fontSize: "60px",
                  fontFamily: "roboto",
                  color: "blue",
                }}
              >
                Start Your Online Journey With Us.
              </h3>
              <p class="fw-bold me-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, doloremque reiciendis, aperiam eveniet quia maiores,
                vero suscipit hic quasi quidem voluptatibus id! Esse quae
                architecto itaque suscipit deleniti, officia dicta nam nisi,
                sapiente praesentium molestiae eos nulla maiores? Consequatur
                harum odio excepturi. Aliquam est aut, harum perferendis dicta
                amet voluptatibus.
              </p>
              <Link to="/courses">
                <Button>Courses</Button>
              </Link>
            </div>
          </div>
          <Carousel.Caption>
            <h3 class="fw-bold fs-1">Professional Tutor</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div style={{ position: "relative" }}>
            <img
              className="d-block w-100 opacity-50"
              src={img2}
              alt="First slide"
              style={{ maxHeight: "590px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "85px",

                right: "50%",
                left: "25px",
              }}
            >
              <h3
                class="fw-bold "
                style={{
                  fontSize: "60px",
                  fontFamily: "roboto",
                  color: "blue",
                }}
              >
                Start Your Online Journey With Us.
              </h3>
              <p class="fw-bold me-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, doloremque reiciendis, aperiam eveniet quia maiores,
                vero suscipit hic quasi quidem voluptatibus id! Esse quae
                architecto itaque suscipit deleniti, officia dicta nam nisi,
                sapiente praesentium molestiae eos nulla maiores? Consequatur
                harum odio excepturi. Aliquam est aut, harum perferendis dicta
                amet voluptatibus.
              </p>
              <Link to="/courses">
                <Button>Courses</Button>
              </Link>
            </div>
          </div>
          <Carousel.Caption>
            <h3 class="fw-bold fs-1">Professional Tutor</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative" }}>
            <img
              className="d-block w-100 opacity-50"
              src={img3}
              alt="First slide"
              style={{ maxHeight: "590px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "85px",

                right: "50%",
                left: "25px",
              }}
            >
              <h3
                class="fw-bold "
                style={{
                  fontSize: "60px",
                  fontFamily: "roboto",
                  color: "blue",
                }}
              >
                Start Your Online Journey With Us.
              </h3>
              <p class="fw-bold me-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, doloremque reiciendis, aperiam eveniet quia maiores,
                vero suscipit hic quasi quidem voluptatibus id! Esse quae
                architecto itaque suscipit deleniti, officia dicta nam nisi,
                sapiente praesentium molestiae eos nulla maiores? Consequatur
                harum odio excepturi. Aliquam est aut, harum perferendis dicta
                amet voluptatibus.
              </p>
              <Link to="/courses">
                <Button>Courses</Button>
              </Link>
            </div>
          </div>
          <Carousel.Caption>
            <h3 class="fw-bold fs-1">Professional Tutor</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
