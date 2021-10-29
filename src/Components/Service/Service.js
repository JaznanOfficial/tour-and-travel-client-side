import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
    const { img, PlaceName, CityName, price,PlaceId } = props.tourPackage;
    
    return (
        <div>
            <Col>
                <Card className='shadow rounded'>
                    <Card.Img variant="top" src={img} height='500px' />
                    <Card.Body>
                        <Card.Title> <h3>{PlaceName}</h3> </Card.Title>
                        <h4 className="text-secondary">{CityName}</h4>
                        <h5 className="text-danger">Total Package Fees: {price}</h5>
                        <Link to={`booking-process/${PlaceId}`}>
                        <Button variant="outline-dark" size="sm">Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
