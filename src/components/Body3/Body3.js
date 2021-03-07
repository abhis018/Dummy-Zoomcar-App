import React from 'react';
import './Body3.css';
import Slider from 'react-animated-slider';
import steering from './steering-wheel.svg';
import happy from './happy.svg';
import kms from './kms.svg';
import cars from './cars.svg';
import star from './star_rating.svg';
import 'react-animated-slider/build/horizontal.css';
import button from './apple_store.png';
import button2 from './google_play.png';
const slides = require("../Body5/Body5").slides;

const Body3 = () => {
    const settings = {
        slider: 'slider',
        previousButton: '<',
        nextButton: '>',
        buttonDisabled: 'disabled',
        track: 'track',
        slide: 'slide',
        hidden: 'hidden',
        previous: 'previous',
        current: 'current',
        next: 'next',
        animateIn: 'animateIn',
        animateOut: 'animateOut',
      };
    return(
        <div>
            <div className="file1">
                <h2>ZOOM ON THE GO!</h2>
                <p>Make a booking, unlock your car, and end your<br/> reservation all from our app</p>
                <div className="store">
                    <a classname="pic1" href=""><img src={button2}/></a>
                    <a href=""><img src={button}/></a>
                </div>
            </div>
            <div className="file2">
                <div className="qualities">
                    <img src={steering}/>
                    <div className="des">3,000+</div>
                    <p>Rides Daily</p>
                </div>
                <div className="qualities">
                    <img src={happy}/>
                    <div className="des">48,00,000+</div>
                    <p>Happy users</p>
                </div>
                <div className="qualities">
                    <img src={kms}/>
                    <div className="des">36,00,00,000+</div>
                    <p>Km Travelled</p>
                    <p className="extra">(enough for 470 round trips to the moon!)</p>
                </div>
                <div className="qualities">
                    <img src={cars}/>
                    <div className="des">6,500+</div>
                    <p>Number of Zoomcars</p>
                </div>
                <div className="first">
                    <img src={star}/>
                    <div className="des">Rating 4.7/5.0</div>
                    <p>Rated by 3,00,000+ customers</p>
                    <p className="extra">over 10,00,000+ bookings</p>
                </div>
            </div>
            <div className="file3">
                <div className="symbol"></div>
                <Slider className="Slider" {...settings}>
                    {slides.map((slide, index) => 
                        <div key={index}>
                        <p>{slide.quotes}</p>
                        <div className="name">{slide.name}</div>
                        </div>)}
                </Slider>
            </div>
        </div>
    )
}

export default Body3;