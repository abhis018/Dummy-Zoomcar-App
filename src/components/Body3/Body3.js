import React from 'react';
import './Body3.css';
import button from './apple_store.png';
import button2 from './google_play.png';

const Body3 = () => {
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
                <div>
                    <div className="des">3,000+</div>
                    <p>Rides Daily</p>
                </div>
                <div>
                    <div className="des">48,00,000+</div>
                    <p>Happy users</p>
                </div>
                <div>
                    <div className="des">36,00,00,000+</div>
                    <p>Km Travelled</p>
                    <p>(enough for 470 round trips to the moon!)</p>
                </div>
                <div>
                    <div className="des">6,500+</div>
                    <p>Number of Zoomcars</p>
                </div>
                <div>
                    <div className="des">Rating 4.7/5.0</div>
                    <p>Rated by 3,00,000+ customers <br/>over 10,00,000+ bookings</p>
                </div>
            </div>
            <div className="file3">
                <p>The experience with Zoomcar has been excellent.
                    Your process is well thought out and the service definitely fills a void.
                    Maybe you could start a school which teaches "real customer service"!
                </p>
                <h2>- Sunil Rastogi</h2>
            </div>
        </div>
    )
}

export default Body3;