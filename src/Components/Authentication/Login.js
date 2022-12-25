import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Context/ContextData";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

// provider
const provider = new GoogleAuthProvider();
const gitProvide = new GithubAuthProvider();

const Login = () => {
  const { loginWithPassword, googleProvider, githubProvider } =
    useContext(ContextProvider);
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
  const handleSubmitGoogle = () => {
    googleProvider(provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleSubmitGithub = () => {
    githubProvider(gitProvide)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
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
        <span>Don't have an account?</span>
        <Link to="/register">Register</Link> <br />
        <Button variant="primary" type="submit">
          Log-in
        </Button>
      </Form>
      <ButtonGroup className="sign-btn">
        <Button
          onClick={handleSubmitGoogle}
          className="mb-2 me-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Sign in with
        </Button>

        <Button
          onClick={handleSubmitGithub}
          className="mb-2"
          variant="outline-dark"
        >
          <FaGithub></FaGithub> Sign in with
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Login;
