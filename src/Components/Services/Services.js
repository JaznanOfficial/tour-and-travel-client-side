import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch('./places.json')
            .then(res => res.json())
            .then(data => setTourPackages(data));
    },[])
    return (
        <div className='services mx-2 my-5'>
            <div className='my-3'>
            <h2 className='text-danger'>Our Tour Packages</h2>
            <h4 className='text-secondary'>(It's always very Romantic and enjoyable...)</h4>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    tourPackages.map(tourPackage => <Service
                        key={tourPackage.PlaceId}
                        tourPackage={tourPackage}
                    ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;