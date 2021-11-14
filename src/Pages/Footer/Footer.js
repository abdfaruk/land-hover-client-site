import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-fl">
                    <div className="footer-col">
                        <h4>About Me</h4>
                        <ul>
                            <li>About Travel With Atik</li>
                            <li>Advertise With Us (PDF)</li>
                            <li>Write for Travel Oregon</li>
                            <li>Privacy Policy,</li>
                            <li>Terms of Use & Accessibility</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Travel Industry</h4>
                        <ul>
                            <li>Submit Your Lodging Listing</li>
                            <li>Travel Industry</li>
                            <li>Travel Oregon Press Room</li>
                            <li>Recognition Programs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact With Me</h4>
                        <ul>
                            <li>Address: 13323 California St.Omaha, NE, 18813</li>
                            <li>Tel: 1 (855) 123 780 456</li>
                            <li>Email: farukabdullahal9@gmail.com</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Footer;