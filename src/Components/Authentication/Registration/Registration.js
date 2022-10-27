import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../../Context/ContextData";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const { createNewUser, updateProfileData } = useContext(ContextProvider);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createNewUser(email, password, name, photoURL)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setError("");
        form.reset();
        userDataChange(name, photoURL);
        navigate("/courses");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const userDataChange = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateProfileData(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "40%", margin: "auto", padding: "10px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photo" type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
        <span>Already have an account?</span>
        <Link to="/login">Log-in</Link> <br />
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div></div>
    </>
  );
};

export default Registration;
