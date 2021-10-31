import React, { useEffect, useState } from 'react';
import './MyBooked.css';

const MyBooked = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://floating-brushlands-96149.herokuapp.com/my-order')
            .then(res => res.json())
            .then(data => {
                setOrder(data)
               
            });
    }, [])
    
    console.log(order);
    return (
        <div className='my-booked'>
            <h1 className='text-primary text-center'> All booking will show here</h1>
        </div>
    );
};

export default MyBooked;