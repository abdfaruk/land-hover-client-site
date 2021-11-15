import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-fl">
                    <div className="footer-col">
                        <h4>Real Estate Markets</h4>
                        <ul>
                            <li>alabama real estate</li>
                            <li>alaska real estate</li>
                            <li>arizona real estate</li>
                            <li>alabama real estate</li>
                            <li>arkansas real estate</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Popular Searches</h4>
                        <ul>
                            <li>Cheap apartments near me</li>
                            <li>Pet friendly apartments near me</li>
                            <li>Land for sale near me</li>
                            <li>Townhomes for sale near me</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>For Professionals</h4>
                        <ul>
                            <li>Popular counties</li>
                            <li>Rental communities</li>
                            <li>Real Estate Leads</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Footer;