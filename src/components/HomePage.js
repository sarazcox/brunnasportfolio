import React from "react";
import { Container, Col, Row } from "reactstrap";
import Cover from "../app/assets/img/cover.png";

const backgroundImageStyle = {
  backgroundImage: `url(${Cover})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingTop: "20%",
  display: "relative",
};

const HomePage = () => {
  return (
    <Container id="home" fluid style={backgroundImageStyle}>
      <Row className="d-flex justify-content-end align-items-center row-content">
        <Col md="6">
          <h1>Welcome to my Portfolio</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
