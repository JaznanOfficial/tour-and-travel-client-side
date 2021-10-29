import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
              <Link to='/home' className='navigation-link'>Home</Link>
              <Link to='/my-booked' className='navigation-link'>My Booked</Link>
              <Link to='/addNewService' className='navigation-link'>Add a Service</Link>
              <Link to='/login' className='navigation-link'><Button variant="outline-light">Log In</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;