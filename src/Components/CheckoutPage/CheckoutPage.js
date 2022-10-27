import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import SideContent from "../Courses/SideContent/SideContent";

const CheckoutPage = () => {
  const coursesName = useLoaderData();
  const { course_name, description } = coursesName;
  return (
    <Row>
      <Col md={3}>
        <SideContent></SideContent>
      </Col>
      <Col md={9}>
        <div className="w-50 ms-5 text-center ps=5">
          <span className="ms-5">
            <h1 className=" mt-5">{course_name}</h1>
            <h6>{description}</h6>
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default CheckoutPage;
