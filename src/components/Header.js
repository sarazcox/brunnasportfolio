import { Container, Navbar, NavbarBrand } from "reactstrap";
import logo from "../app/assets/img/logo.png";

const Header = () => {
    return (
        <Navbar className='navbar' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img className="logo" src={logo} alt="brunna's logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
    )
}

export default Header;