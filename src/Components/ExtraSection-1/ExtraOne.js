import React from 'react';
import './ExtraOne.css'


const ExtraOne = () => {
    return (
        <div className='extra-one d-lg-flex mx-auto my-5 justify-content-between align-items-center'>
            <div className='text-left w-70 ms-5'>
                <h1 className='text-center text-danger'>Why Booking With Us?</h1>
                <p className='text-left'>It is very enjoyable that you can travel around the world through our tour company at low and affordable package prices. Especially our Bangladesh tour is always very enjoyable, affordable and romantic.</p>
                <h3 className='text-left'><i class="far fa-thumbs-up text-danger"></i>&emsp;&nbsp;&nbsp; All packages and activiates are carefully picked by us.</h3>
                <h3 className='text-left'><i class="fas fa-people-carry text-danger"></i> &emsp; Best price guaranteee & Hassle free!</h3>
                <h3 className='text-left'><i class="fas fa-award text-danger"></i> &emsp;&nbsp;&nbsp;We are an award winning agency</h3>
                <h3 className='text-left'><i class="far fa-heart text-danger"></i>&emsp;&nbsp; Trusted by more than 80,000 customers</h3>
            </div>
            <div className='w-50'>
            <img src='https://www.pngarts.com/files/11/Elon-Musk-PNG-Image-Background.png' alt="" width='300px' />
            </div>
        </div>
    );
};

export default ExtraOne;