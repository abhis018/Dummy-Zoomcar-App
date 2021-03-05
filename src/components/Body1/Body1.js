import React from 'react';
import './Body.css';
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image4.png';
import img5 from './image5.png';
import img6 from './image6.png';

const Body1 = () => {
    return(
        <div className="body1-main">
            <div className="body1">
                <div className="heading">DRIVE IN A SANITISED ZOOMCAR</div>
                <h1 className="sub-heading">Self Drive Car Rental in <span>Kolkata</span></h1>
                <div className="start-block">Start your wonderful journey</div>
            </div>
            <div className="advantage">
                <h2>THE ZOOMCAR ADVANTAGE</h2>
                <p>We simplified car rentals, so you can focus on what's important to you.</p>
                <div className="container">
                    <div className="container1">
                        <img src={img1}/>
                        <h3>Fuel Cost Included</h3>
                        <p className="para">Don't worry about mileage! All fuel costs are Included. If you refill fuel, we'll pay you back!</p>
                    </div>
                    <div className="container1">
                        <img src={img2}/>
                        <h3>No Hidden Charges</h3>
                        <p className="para">Our prices include taxes and insurance.<br/> What you see is what you really pay!</p>
                    </div>
                    <div className="container1">
                    <img src={img3}/>
                        <h3>Flexi Pricing Packages</h3>
                        <p className="para">One size never fits all! Choose a balance of<br/> time and kilometers that works best for you.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="container1">
                        <img src={img4}/>
                        <h3>Go Anywhere</h3>
                        <p className="para">Our cars have all-India permits. Just<br/> remember to pay state tolls and entry taxes.</p>
                    </div>
                    <div className="container1">
                        <img src={img6}/>
                        <h3>23x7 Roadside Assistance</h3>
                        <p className="para">We have round-the-clock, pan India<br/> partners. Help is never far away from you.</p>
                    </div>
                    <div className="container1">
                        <img src={img5}/>
                        <h3>Damage Insurance</h3>
                        <p className="para">All your bookings include damage insurance! Drive safe, but don’t worry!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1;