import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseContent from "./CourseContent/CourseContent";
import SideContent from "./SideContent/SideContent";
const Courses = () => {
  return (
    <div>
      <Row>
        <Col md={2}>
          <SideContent></SideContent>
        </Col>
        <Col md={10}>
          <CourseContent></CourseContent>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
