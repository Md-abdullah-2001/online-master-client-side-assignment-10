import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Image } from "react-bootstrap";
import "./Details.css";

const DetailsData = ({ newsDetails }) => {
  const componentRef = useRef();
  const handlePdf = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "course-detail",
    onafterprint: () => alert("print success"),
  });
  console.log(newsDetails);
  const { course_name, img, description } = newsDetails;

  return (
    <div className="detail">
      <Image className="image" src={img}></Image>
      <div className="card-body">
        <Button onClick={handlePdf} variant="warning">
          Download PDF
        </Button>{" "}
        <h1>{course_name}</h1>
        <p ref={componentRef}>{description}</p>
        <Button variant="danger">Premium access</Button>{" "}
      </div>
    </div>
  );
};
// style={{ width: "100%", height: window.innerHeight }}
export default DetailsData;
