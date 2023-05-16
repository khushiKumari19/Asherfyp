import React, { useState } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/auth.actions";
import { Navigate } from "react-router-dom";
import Header from '../../Components/Header/Header'
import './sign.css'
import axios from "axios";

const Signin = () => {

  const auth = useSelector((state)=>state.auth)
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const validateEmail = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  }

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const userLogin = (e) => {
    e.preventDefault();

    // Validate the email and password
    validateEmail();
    validatePassword();

    // If there are no errors, dispatch the login action
    if (!emailError && !passwordError) {
      const user = {
        email,
        password
      };
      dispatch(login(user));
    }
  }

  // ...


  if(auth.authenticate){
    return <Navigate to={"/"}/>
  }

  return (
    <Header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Sign In</Card.Title>
            <Form onSubmit={userLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={validateEmail} />
                {emailError && <span className="error">{emailError}</span>}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} onBlur={validatePassword} />
                {passwordError && <span className="error">{passwordError}</span>}
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Header>
  );
}

export default Signin;
