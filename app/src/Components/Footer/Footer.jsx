import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
   
  },
  {
    display: "MarketPlace",
   
  },

  {
    display: "Sell Tokens",
   
  },

  {
    display: "Metamask",
    
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    
  },
  {
    display: "Membership",
   
  },

  {
    display: "Purchases Guide",
    
  },

  {
    display: "Terms of Service",
    
  },
];

const contact = [
  {
    display: "Address: Karachi, Pakistan",
    
  },
  {
    display: " Phone: +92 0123456789 ",
   
  },

  {
    display: "Email: example@gmail.com",
    
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="logo">
              <i class="ri-car-fill"></i> CarT
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <div className="social">
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <div className="col">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <div className="col1">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <div className="col2">
            <h6 className="fw-bold">Get in touch</h6>
            <ListGroup className="link__list">
              {contact.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
            </div>
          </Col>
        
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
