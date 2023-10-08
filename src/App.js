import React from 'react';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import logo from "./app/assets/img/logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar className='navbar' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                    <img className="logo" src={logo} alt="brunna's logo" /> 
                    </NavbarBrand>
                </Container>
            </Navbar>
            Brunna Venancio
    </div>
  );
}

export default App;
