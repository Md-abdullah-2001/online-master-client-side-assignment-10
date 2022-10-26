import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseContent = () => {
  //

  //   // console.log(all_courses);
  //   // const { description, img } = course;

  //     <div>
  //     <h1>All the courses</h1>
  //     <div>
  //       {types.map((type) => (
  //         <h5 key={type.id}>
  //           <Link to={`/courses/${type.id}`}>{type.course_name}</Link>
  //         </h5>
  //       ))}
  //     <Card style={{ width: "18rem" }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>not</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text>
  //         {/* <Link to={`/details/${course.id}`}> */}
  //         <Button variant="primary">Go somewhere</Button>
  //         {/* </Link> */}
  //       </Card.Body>
  //     </Card>
  //     </div>

  // }

  const [types, setTypes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/courses_detail`)
      .then((res) => res.json())
      .then((data) => setTypes(data));
  }, []);
  return (
    <div>
      <h1>All the courses</h1>
      <div>
        {types.map((type) => (
          <div>
            <h5 key={type.id}>
              <Link to={`/courses/${type.id}`}>{type.course_name}</Link>
            </h5>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={type.img} />
              <Card.Body>
                <Card.Title>not</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to={`/courses/${type.id}`}>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
