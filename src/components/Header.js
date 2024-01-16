import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import logo from "../app/assets/img/logo-white.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark sticky="top" expand="md" style={{ "backgroundColor": "black"}}  >
      <NavbarBrand className="ms-5">     
        <img src={logo} alt="brunna's logo" className="float-start logo"  />        
      </NavbarBrand>   
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} light />  
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar >
          <NavItem>
            <a className="nav-link" href="#home">
              <i /> HOME
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#about">
              <i /> ABOUT
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#work">
              <i /> WORK
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#contact">
              <i  /> CONTACT
            </a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
