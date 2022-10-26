import React from "react";
import { Image } from "react-bootstrap";

const DetailsData = ({ newsDetails }) => {
  console.log(newsDetails);
  const { course_name, img, description } = newsDetails;
  return (
    <div>
      <Image src={img}></Image>
      <h1>this is category details{course_name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default DetailsData;
