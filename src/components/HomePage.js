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
    <Container id="home" fluid style={backgroundImageStyle} className="justify-content-center">
      <Row className="justify-content-end">
        <Col md="6">
          <h1>Hello, my name is Brunna Venancio. Welcome to my Portfolio</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
