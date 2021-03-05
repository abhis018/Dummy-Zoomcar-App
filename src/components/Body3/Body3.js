import React from 'react';
import './Body3.css';
import Help from './help.svg';
import Safety from './safety.svg';
import Works from './zc-works.svg';
import Policies from './policies.svg';
import Slider from 'react-animated-slider';
import steering from './steering-wheel.svg';
import happy from './happy.svg';
import kms from './kms.svg';
import cars from './cars.svg';
import star from './star_rating.svg';
import 'react-animated-slider/build/horizontal.css';
// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import { Slide } from 'material-auto-rotating-carousel';
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
            <div className="press">
                {/* <AutoRotatingCarousel>
                    <Slide
                        // <div className="article-container">
                        //     <a href="https://www.thehindubusinessline.com/companies/zoomcar-raises-30-million-as-part-of-its-100-million-ongoing-series-d-fund-raise-plans/article30613104.ece" target="_blank" title="Hindu Business Line" class="icon10">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="https://www.livemint.com/companies/start-ups/zoomcar-is-now-back-in-bengaluru-hyderabad-other-cities-with-new-offers-11590481609351.html" target="_blank" title="Live Mint" class="icon11">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="https://brandequity.economictimes.indiatimes.com/news/marketing/how-zoomcar-plans-to-capture-80-percent-market-share-with-its-digital-dominated-marketing-strategy/73287096" target="_blank" title="ET Brand Equity" class="icon6">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="https://www.cnbctv18.com/auto/zoomcar-resumes-operations-in-35-cities-after-easing-of-lockdown-restrictions-6002751.htm" target="_blank" title="CNBC" class="icon7">
                        //     </a>
                        // </div>
                    />
                    <Slide
                        // <div className="article-container">
                        //     <a href="https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/zoomcar-resumes-operations-in-35-cities-after-easing-of-lockdown-restrictions/articleshow/75999150.cms" target="_blank" title="The Economic Times" class="icon4">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="https://timesofindia.indiatimes.com/business/india-business/self-drive-platform-zoomcar-raises-30-million/articleshow/73474528.cms" target="_blank" title="The Times of India" class="icon1">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="https://www.timesnownews.com/videos/et-now/shows/what-trends-stood-out-for-zoomcar-startup-central/49980" target="_blank" title="ET NOW" class="icon9">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="http://blogs.wsj.com/indiarealtime/2016/08/25/ford-bets-on-india-car-rental-startup-zoomcar/" target="_blank" title="The Wall Street Journal" class="icon3">
                        //     </a>
                        // </div>
                    />
                    <Slide
                        // <div className="article-container">
                        //     <a href="https://techcrunch.com/2016/08/24/ford-leads-24m-investment-in-india-based-vehicle-rental-company-zoomcar/" target="_blank" title="Tech Crunch" class="icon2">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="http://www.business-standard.com/article/companies/zoomcar-launches-doorstep-delivery-service-116011401061_1.html" target="_blank" title="Business Standard" class="icon5">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="http://qz.com/458266/how-two-americans-zoomed-into-indias-self-driven-car-rental-market/" target="_blank" title="Quartz" class="icon8">
                        //     </a>
                        // </div>
                        // <div className="article-container">
                        //     <a href="https://yourstory.com/2020/05/zoomcar-resumes-operations-35-cities-coronavirus-lockdown" target="_blank" title="Your Story" class="icon12">
                        //     </a>
                        // </div>
                    />
                </AutoRotatingCarousel> */}
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

export default Body3;