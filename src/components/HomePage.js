import React from "react";
import { Container, Col, Row } from "reactstrap";
import Cover from "../app/assets/img/cover.png";

const backgroundImageStyle = {
  backgroundImage: `url(${Cover})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left",
  paddingTop: "20%",
  
};

const HomePage = () => {
  return (
    <Container id="home" fluid style={backgroundImageStyle} className="d-flex align-items-center">
      <Row className="justify-content-center align-items-center">
        <Col md="6" className="text-right">
          <h1>Hello, my name is Brunna Venancio. Welcome to my Portfolio</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
