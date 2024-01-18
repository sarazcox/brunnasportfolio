import { Container, Col, Row } from "reactstrap";
import TattooImagesCarousel from "./TattooImagesCarousel";
import EmbroideryImagesCarousel from "./EmbroideryImagesCarousel";

const MyWork = () => {
  return (
    <Container id="work" fluid style={{backgroundColor: "#EDECED"}}>
      {<br />}
      <Row>
        <Col md="12">
          <h2>My Work</h2>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h4>Tattoo</h4>
          <TattooImagesCarousel />
        </Col>
        <Col md="6">
          <h4>Embroidery</h4>
          <EmbroideryImagesCarousel />
        </Col>
      </Row>
      {<br />}
      {<br />}
    </Container>
  );
};

export default MyWork;
