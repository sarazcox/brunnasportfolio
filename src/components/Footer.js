import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col>
            <a className="btn" href="http://instagram.com/">
              <i className="fa fa-instagram fa-2x" />
            </a>{" "}
            <a className="btn" href="http://twitter.com/">
              <i className="fa fa-twitter fa-2x" />
            </a>{" "}
            <a className="btn" href="http://youtube.com/">
              <i className="fa fa-youtube fa-2x" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">Made with <i className="fa fa-heart" aria-hidden="true"></i> by Sara</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
