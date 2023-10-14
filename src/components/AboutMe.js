import { Container, Col, Row } from "reactstrap";
import profile from "../app/assets/img/profile.jpg";

const AboutMe = () => {
  return (
    <Container>
      {<br />}
      <Row>
        <Col md="6">
          <h2>About Me</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          etiam dignissim diam quis enim lobortis scelerisque fermentum. In
          iaculis nunc sed augue lacus viverra vitae congue. Nam libero justo
          laoreet sit amet cursus sit amet dictum. Gravida cum sociis natoque
          penatibus et magnis dis parturient. At in tellus integer feugiat
          scelerisque varius morbi enim. Maecenas ultricies mi eget mauris
          pharetra et ultrices neque. At quis risus sed vulputate odio ut enim.
          Pellentesque nec nam aliquam sem et tortor consequat. Pharetra magna
          ac placerat vestibulum lectus. Diam sit amet nisl suscipit. In hac
          habitasse platea dictumst vestibulum rhoncus. Et malesuada fames ac
          turpis egestas maecenas pharetra. Dictum varius duis at consectetur
          lorem donec massa. Massa id neque aliquam vestibulum morbi blandit
          cursus. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
          At varius vel pharetra vel turpis nunc eget lorem dolor. Sed augue
          lacus viverra vitae congue eu. 
        </Col>
        <Col md="6">
          <img
            className="profile"
            src={profile}
            alt="Brunna's profile picture"
          />
        </Col>
      </Row>
      {<br />}
    </Container>
  );
};

export default AboutMe;
