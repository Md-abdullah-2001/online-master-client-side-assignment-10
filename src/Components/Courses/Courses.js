import React from "react";
import { Col, Row } from "react-bootstrap";
import CourseContent from "./CourseContent/CourseContent";
import SideContent from "./SideContent/SideContent";
const Courses = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <SideContent></SideContent>
        </Col>
        <Col md={9}>
          <CourseContent></CourseContent>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
