import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EveryCars from "./EveryCars";
import "./CourseContent.css";
const CourseContent = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-data-delta.vercel.app/courses_detail`)
      .then((res) => res.json())
      .then((data) => setTypes(data));
  }, []);
  return (
    <div>
      <h1>All the courses</h1>
      <div className="cardStyle ">
        {types.map((type) => (
          <EveryCars card={type} key={type.id}></EveryCars>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
