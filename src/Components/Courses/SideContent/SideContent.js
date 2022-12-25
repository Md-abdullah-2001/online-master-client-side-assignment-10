import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CourseContent from "../CourseContent/CourseContent";

const SideContent = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-data-delta.vercel.app/courses-type`)
      .then((res) => res.json())
      .then((data) => setTypes(data));
  }, []);
  return (
    <div className=" shadow p-5 me-4 h-100">
      <h3>Find Coursess</h3>
      <div>
        {types.map((type) => (
          <h5 key={type.id}>
            <Link to={`/courses/${type.id}`}>{type.course_name}</Link>
          </h5>
        ))}
      </div>
    </div>
  );
};

export default SideContent;
