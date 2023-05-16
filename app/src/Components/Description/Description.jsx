import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/stack.png";
import "./description.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
             <strong> Fractional and frictionless real estate investing</strong>
              </h2>
              <div>
              <h2 className="sub">
             OWNERSHIP REINVENTED
              </h2>
              </div>
              <p className="para">
              For the first time, investors around the globe can buy into the car market through fully-compliant, fractional, tokenized ownership. Powered by blockchain.
              </p>
            </div>
            <button type="button" className="button1">Explore Marketplace</button>

          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
