import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Newsletter = () => {
  const navigate = useNavigate();
  const navigateBlog = () => {
    navigate('/blog');
  };

  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="blog">Visit Our Blog</h2>
            <div className="subscribe">
              <button className="btn" onClick={navigateBlog}>Blog</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
