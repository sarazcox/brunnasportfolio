import { Container } from "reactstrap";
// import Background from "../app/assets/img/leaf.jpg";

const HomePage = () => {
//   const containerStyle = {
//     backgroundImage: `url(${Background})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat", 
//     backgroundPosition: "center", 
//     minHeight: "100vh", 
//     marginLeft: "0px",
//     marginRight: "0px",
//   };

  return (
    <Container id="home" fluid className="home mx-0 px-0">
      <h1>
        Hello, my name is Brunna Venancio. Welcome to my Portfolio
      </h1>
    </Container>
  );
};

export default HomePage;
