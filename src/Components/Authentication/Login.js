import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Context/ContextData";

const Login = () => {
  const { loginWithPassword } = useContext(ContextProvider);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/courses";
  const navigate = useNavigate();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <Form
      onSubmit={handleSubmitForm}
      style={{
        width: "40%",
        margin: "auto",
        padding: "10px",
      }}
    >
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
