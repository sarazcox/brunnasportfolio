import React from "react";
import { Container, Col, Row } from "reactstrap";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <Container id="contact" fluid style={{backgroundColor: "#F5F7F8"}}>
      {<br />}
      <Row className="row-content pb-5">
        <Col xs="12">
          <h2>Get a quote</h2>
          <hr />
        </Col>
        <Col md="6">
          <ContactForm />
          <br />
        </Col>
        <Col md="6">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 "
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=R.+Teodoto+Tonon,+243+-+Centro,+Tubarão+-+SC,+88705-010,+Brazil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </Col>
      </Row>
      
      <Row className="row-content align-items-center">
        <Col md="4">
          <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
          <br />
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
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
            style={{ color: "#141E46" }}
          >
            fakeemail@fakeemail.com
          </a>
        </Col>
        <Col md="4">
          <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
          <br />
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
      {<br />}
    </Container>
  );
};

export default ContactMe;
