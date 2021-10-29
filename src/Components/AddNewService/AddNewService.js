import React from "react";
import { Button, Form } from "react-bootstrap";

const AddNewService = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-50 me-5 my-3">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Place Name</Form.Label>
                        <Form.Control type="text" placeholder="Place Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>City Name</Form.Label>
                        <Form.Control type="text" placeholder="City Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" placeholder="Image Url" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Place Details</Form.Label>
                        <Form.Control type="text" placeholder="Place Details" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddNewService;
