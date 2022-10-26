import React, { useEffect, useState } from "react";
const auth = getAuth(app);
export const AuthContext = createContext();
const Context_data = () => {
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
          <h5 key={type.id}>h</h5>
        ))}
      </div>
    </div>
  );
};

export default Context_data;
