import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from './travel.jpg'
import useAuth from '../../Hooks/useAuth'

const Navigation = () => {
  const { user, logOut } = useAuth();
  
    return (
        <div>
        <Navbar bg="dark" variation='light' expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" width='80px' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center justify-content-center">
              <Link to='/home' className='navigation-link'>Home</Link>
              <Link to='/my-booked' className='navigation-link'>My Booked</Link>
              
                {user?.email ?
                  <div className='d-flex flex-row justify-content-center align-items-center'>
                  <Link to='/addNewService' className='navigation-link'>Add a Service</Link>
                  <img src={user.photoURL} alt="" width='30px'/>&nbsp; &nbsp;
                    <h5 className='text-light'>  {user.displayName}</h5> &nbsp; &nbsp; <Button variant="outline-light" onClick={logOut}>Log Out</Button> </div>
                  :
                  <Link to='/login' className='navigation-link'><Button variant="outline-light">Log In</Button></Link>}
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;