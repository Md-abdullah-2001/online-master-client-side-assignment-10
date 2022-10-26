import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ContextProvider } from "../../../Context/ContextData";
import "./Registration.css";
const provider = new GoogleAuthProvider();
const Registration = () => {
  const { googleProvider } = useContext(ContextProvider);
  const handleSubmitGoogle = () => {
    googleProvider(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <Form style={{ width: "40%", margin: "auto", padding: "10px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>
        <ButtonGroup className="sign-btn">
          <Button
            onClick={handleSubmitGoogle}
            className="mb-2 me-2"
            variant="outline-primary"
          >
            <FaGoogle></FaGoogle> Sign in with
          </Button>

          <Button className="mb-2" variant="outline-dark">
            <FaGithub></FaGithub> Sign in with
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Registration;
