import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Actions/auth.actions";
import './style.css'
import Header from "../../Components/Header/Header";

const Signup = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!firstName) {
      setError("First name is required");
      return false;
    }
    if (!lastName) {
      setError("Last name is required");
      return false;
    }
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Email is not valid");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (!confirmPassword) {
      setError("Confirm password is required");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const userSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(signup(user));
    }
  };

  if (auth.authenticate) {
    return <Navigate to={"/signin"} />;
  }

  if (user.loading) {
    return <p>Loading...</p>;
  }

  return (
    <Header>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4">
              <h2 className="text-center mb-4">SIGN UP</h2>
              {error && <p className="text-danger">{error}</p>}
              <Form onSubmit={userSignup}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter Your Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Sign up
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

export default Signup;
