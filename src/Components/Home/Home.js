import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Assest/pexels-ravi-kant-4541996.jpg";

const Home = () => {
  return (
    <div className="">
      <Image className="w-50 ms-5" src={img}></Image>
      <div className="ms-5">
        <h1 className="mt-5">Explore Our Popular Courses</h1>
        <Link to="/courses">
          <Button>Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
