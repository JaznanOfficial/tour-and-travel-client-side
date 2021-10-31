import React from "react";
import footerLogo from "./travel.jpg";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="mx-auto w-100 d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="text-light text-left m-3">
                    <i class="fas fa-phone"></i> London+6-345-3456-233 <br /> <i class="fas fa-phone"></i> New York+1-345-33454-4 <br />
                    <i class="fas fa-phone"></i> Tokyo+34-8757-4556 <br />
                    <i class="fas fa-envelope-open-text"></i> tourandtravel@air.com <br /> © 2014-2017 Travel Tour All Rights Reserved.
                    </h5>
                </div>
                <div>
                    <h4 className='text-light text-center mx-1'>
                        PAY SAFELY WITH US The payment is encrypted and transmitted securely with an
                        SSL protocol. <br />
                        <h1><i class="fab fa-cc-visa text-light"></i> <i class="fab fa-cc-mastercard text-light"></i> <i class="fab fa-cc-amex text-light"></i></h1>
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
