import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>About Us</p>
            <div className="list">
                <ul>
                    <li>Zoomcar Team</li>
                    <li>Locations &amp; Cars</li>
                </ul>
                <ul className="child-list1">
                    <li>Zoomcar Subscription</li>
                    <li>Self Drive Cars</li>
                </ul>
                <ul className="child-list1">
                    <li>Zoomcar Blog</li>
                    <li>Invest via OurCrowd</li>
                </ul>
                <ul className="child-list1">
                    <li>Careers @ Zoomcar</li>
                </ul>
            </div>
            <p>Cities</p>
            <div className="list">
                <ul>
                    <li>Self drive cars in Bangalore</li>
                    <li>Self drive cars in Chennai</li>
                    <li>Self drive cars in Ahemdabad</li>
                    <li>Self drive cars in Ludhiana</li>
                    <li>Self drive cars in Nagpur</li>
                    <li>Self drive cars in Surat</li>
                    <li>Self drive cars in Bhubaneswar</li>
                </ul>
                <ul className="child-list2">
                    <li>Self drive cars in Pune</li>
                    <li>Self drive cars in Hydrabad</li>
                    <li>Self drive cars in Coimbatore</li>
                    <li>Self drive cars in Mangalore-Manipal</li>
                    <li>Self drive cars in Kochi</li>
                    <li>Self drive cars in Siliguri</li>
                    <li>Self drive cars in Hassan</li>
                </ul>
                <ul>
                    <li>Self drive cars in Delhi</li>
                    <li>Self drive cars in Chandigarh</li>
                    <li>Self drive cars in Indore</li>
                    <li>Self drive cars in Mysore</li>
                    <li>Self drive cars in Udaipur</li>
                    <li>Self drive cars in Lucknow</li>
                    <li>Self drive cars in Vadodara</li>
                </ul>
                <ul className="child-list2">
                    <li>Self drive cars in Mumbai</li>
                    <li>Self drive cars in Kolkata</li>
                    <li>Self drive cars in Jaipur</li>
                    <li>Self drive cars in Vizag</li>
                    <li>Self drive cars in Vijayawada</li>
                    <li>Self drive cars in Guwahati</li>
                    <li>Self drive cars in Trivandrum</li>
                </ul>
            </div>
            <p>Airport Services</p>
            <div className="list">
                <ul>
                    <li>Car rental from Bangalore Airport</li>
                    <li>Car rental from Chennai Airport</li>
                    <li>Car rental from Ahemdabad Airport</li>
                    <li>Car rental from Vizag Airport</li>
                    <li>Car rental from Guwahati Airport</li>
                </ul>
                <ul>
                    <li>Car rental from Pune Airport</li>
                    <li>Car rental from Hydrabad Airport</li>
                    <li>Car rental from Coimbatore Airport</li>
                    <li>Car rental from Udaipur Airport</li>
                    <li></li>
                </ul>
                <ul>
                    <li>Car rental from Delhi Airport</li>
                    <li>Car rental from Chandigarh Airport</li>
                    <li>Car rental from Indore Airport</li>
                    <li>Car rental from Surat Airport</li>
                    <li></li>
                </ul>
                <ul>
                    <li>Car rental from Mumbai Airport</li>
                    <li>Car rental from Kolkata Airport</li>
                    <li>Car rental from Jaipur Airport</li>
                    <li>Car rental from Lucknow Airport</li>
                    <li></li>
                </ul>
            </div><hr/>
            <div className="address">
                <p>Let's Keep in Touch</p>
                <p>7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008</p>
                <p>© Copyright 2017 Zoomcar India Private Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;