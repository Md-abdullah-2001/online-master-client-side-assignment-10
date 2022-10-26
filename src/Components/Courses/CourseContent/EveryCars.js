import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CourseContent.css";
const EveryCars = ({ card }) => {
  console.log(card);
  const { course_name, img, id } = card;
  return (
    <div className="card">
      <Card>
        <Card.Img variant="top" className="image" src={img} />
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Link to={id}>
            <Button variant="primary">Details</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EveryCars;
