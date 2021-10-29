import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from './travel.jpg'

const Navigation = () => {
    return (
        <div>
        <Navbar bg="dark" variation='light' expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" width='80px' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='navigation-link'>Home</Nav.Link>
              <Nav.Link href="#link" className='navigation-link'><Button variant="outline-light">Log In</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;