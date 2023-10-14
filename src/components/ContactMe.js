import React from "react";
import { Container, Col, Row } from "reactstrap";
import ContactForm from "./ContactForm";
import map from "../app/assets/img/Map.PNG";

const ContactMe = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col xs="12">
          <h2>Get a quote</h2>
          <hr />
        </Col>
        <Col md="6"><ContactForm /><br /></Col>
        <Col md="6">
        {/* Map api */}
        <img className="map" src={map} alt="google maps location" />
        </Col>
        <hr />       
      </Row>
      <br />
      
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
            fakeemail@fakeemail.co
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
    </Container>
  );
};

export default ContactMe;
