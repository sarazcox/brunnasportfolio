import React from "react";
import { Container, Col, Row } from "reactstrap";

const ContactMe = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col xs="12">
          <h2>Get a quote</h2>
          <hr />
        </Col>
        <Col md="10">TBD: ContactForm</Col>
      </Row>
      <br />
      <Row>
        <Col>
          <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
        </Col>
        <Col>
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        </Col>
        <Col>
          <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
        </Col>
      </Row>
      <Row className="row-content align-items-center">
        <Col md="4">
          <a
            role="button"
            className="btn btn-link"
            href="https://maps.app.goo.gl/PoJoAhvpMx5WCKsa7"
            style={{ color: "#141E46" }}
          >
            Casa Crisálida Estúdio Criativo
          </a>
        </Col>
        <Col md="4">
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
            style={{ color: "#141E46" }}
          >
            fakeemail@fakeemail.co
          </a>
        </Col>
        <Col md="4">
          <a
            role="button"
            className="btn btn-link"
            href="tel:+5548936185788"
            style={{ color: "#141E46" }}
          >
            +55 48 9361-85788
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
