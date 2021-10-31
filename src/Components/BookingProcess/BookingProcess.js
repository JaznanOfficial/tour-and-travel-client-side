import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const BookingProcess = () => {
  const { user } = useAuth();
    const params = useParams();
    const { bookingId } = params;
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch("https://floating-brushlands-96149.herokuapp.com/places")
            .then((res) => res.json())
            .then((data) => setBooking(data[`${bookingId}` - 1]));
    }, []);
    const { img, PlaceName, CityName, price, PlaceId, placeDetails } = booking;


  const handleBookingProcess = (e) => {
    e.preventDefault()
      console.log(PlaceName,CityName);
    }
  
    return (
        <div className="d-lg-flex justify-content-center mx-auto w-75 align-items-center">
            <div className='w-50 me-5 my-3'>
            <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="name" placeholder="Your Name" value = {user?.displayName} onChange={()=>{}} />
            </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder= "Your Email" value= {user?.email} onChange={()=>{}}  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Your Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="number" placeholder="Your Contact Number" />
            </Form.Group>
            
            <Button onClick={handleBookingProcess} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </div>
            <div className='my-3 mx-auto'>
                <Card style={{ width: "30rem" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{PlaceName}</Card.Title>
                        <h4> {CityName} </h4>
                        <Card.Text>{placeDetails}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BookingProcess;
