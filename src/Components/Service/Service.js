import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = (props) => {
    const { img, PlaceName, CityName, price } = props.tourPackage;
    console.log(props.tourPackage);
    return (
        <div>
            <Col>
                <Card className='shadow rounded'>
                    <Card.Img variant="top" src={img} height='500px' />
                    <Card.Body>
                        <Card.Title> <h3>{PlaceName}</h3> </Card.Title>
                        <h4 className="text-secondary">{CityName}</h4>
                        <h5 className="text-danger">Total Package Fees: {price}</h5>
                        <Button variant="outline-dark" size="sm">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
