import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import SideContent from "../Courses/SideContent/SideContent";
import DetailsData from "../Details_course/DetailsData";

const Types = () => {
  const newsDetails = useLoaderData();

  return (
    <Row>
      <Col md={3}>
        <SideContent></SideContent>
      </Col>
      <Col md={9}>
        <DetailsData
          key={newsDetails.id}
          newsDetails={newsDetails}
        ></DetailsData>
      </Col>
    </Row>
  );
};

export default Types;
