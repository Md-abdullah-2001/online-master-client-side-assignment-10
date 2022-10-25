import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideContent = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/courses-type`)
      .then((res) => res.json())
      .then((data) => setTypes(data));
  }, []);
  return (
    <div>
      <h1>All the courses</h1>
      <div>
        {types.map((type) => (
          <h5 key={type.id}>
            <Link to={`/types/${type.id}`}>{type.course_name}</Link>
          </h5>
        ))}
      </div>
    </div>
  );
};

export default SideContent;
