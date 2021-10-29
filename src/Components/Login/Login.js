import React from "react";
import { Card } from "react-bootstrap";
import './Login.css'

const Login = () => {
    return (
        <div className='my-5'>
            <div className="d-grid mb-2 justify-content-center align-items-center text-center">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6IrIk4SLn7-Uc5g0gE28o3vL1XBYjXgLEzFglZn4SABYEzDppXBSEhtma8d2CA7C_d4&usqp=CAU" width='200px' />
            <Card.Body>
            <button
            className="btn btn-google btn-login text-uppercase fw-bold btn-outline-danger"
            type="submit"
          >
          <i class="fab fa-google"></i> Sign in with Google
          </button>
            </Card.Body>
          </Card>
            </div>

            
        </div>
    );
};

export default Login;
