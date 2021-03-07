import React from 'react';
import './Body4.css';
import Help from './help.svg';
import Safety from './safety.svg';
import Works from './zc-works.svg';
import Policies from './policies.svg';
import scroll1 from './scroll1.png';
import scroll2 from './scroll2.jpg';
import scroll3 from './scroll3.jpg';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-elastic-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Body4 = () => {
    const settings = {
        slider: 'slider',
        previousButton: '<',
        nextButton: '>',
        buttonDisabled: 'disabled',
        autoplay:'activate',
        track: 'track',
        slide: 'slide',
        hidden: 'hidden',
        previous: 'previous',
        current: 'current',
        next: 'next',
        animateIn: 'animateIn',
        animateOut: 'animateOut',
      };
    return (
        <div>
            <div className="press">
                {/* <Carousel breakPoints={breakPoints} autoplay>
                    <div>
                        <img src={scroll1} />
                    </div>
                    <div>
                        <img src={scroll2} />
                    </div>
                    <div>
                        <img src={scroll3}/>
                    </div>
                </Carousel> */}
                <Slider  className="slide" {...settings} >
                    <img src={scroll1}/>
                    <img src={scroll2} />
                    <img src={scroll3}/>
                </Slider>
            </div>
            <div className="press-footer">
                <a className="link">
                    <img src={Works}/>
                    <p>How zoomcar works?</p>
                </a>
                <a className="link">
                    <img src={Policies}/>
                    <p>Policies</p>
                </a>
                <a className="link">
                    <img src={Help}/>
                    <p>Help Support</p>
                </a>
                <a className="link">
                    <img src={Safety}/>
                    <p>Zoom in Safety</p>
                </a>
            </div>
        </div>
    )
}
export default Body4;