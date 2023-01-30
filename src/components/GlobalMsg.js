import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const GlobalMsg = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-dark text-light text-center">
          <i className="fa-solid fa-phone-volume"></i> 1800 KLEEN
        </Col>
        <Col className="bg-success text-light text-center">
          <a href="/booking" className="nav-link">
            <i className="fa-solid fa-mobile-retro"></i> Book Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};
