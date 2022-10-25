import React from "react";
import { Col, Row } from "react-bootstrap";
import CourseContent from "../Courses/CourseContent/CourseContent";
import SideContent from "../Courses/SideContent/SideContent";

const Types = () => {
  return (
    <Row>
      <Col md={3}>
        <SideContent></SideContent>
      </Col>
      <Col md={9}>
        <h1>this is category details</h1>
      </Col>
    </Row>
  );
};

export default Types;
