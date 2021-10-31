import React from "react";
import footerLogo from "./travel.jpg";

const Footer = () => {
    return (
        <div className="bg-black text-center">
            <div className="mx-auto w-sm-75 d-lg-flex justify-content-between align-items-center">
                <div>
                    <h5 className="text-light text-left m-3">
                    <i className="fas fa-phone"></i> London+6-345-3456-233 <br /> <i class="fas fa-phone"></i> New York+1-345-33454-4 <br />
                    <i className="fas fa-phone"></i> Tokyo+34-8757-4556 <br />
                    <i className="fas fa-envelope-open-text"></i> tourandtravel@air.com <br /> © 2014-2017 Travel Tour All Rights Reserved.
                    </h5>
                </div>
                <div>
                    <h4 className='text-light text-center mx-1'>
                        PAY SAFELY WITH US The payment is encrypted and transmitted securely with an
                        SSL protocol. <br />
                        <i className="fab fa-cc-visa text-primary fw-bolder"></i> <i className="fab fa-cc-mastercard text-primary fw-bolder"></i> 
                    </h4>
                </div>
                <div>
                    <img src={footerLogo} alt="" width="160px" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
