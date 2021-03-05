import React from 'react';
import './Body2.css';
import pic from './pic1.svg';
import dl from './dl.svg';
import Return from './return.svg';
import book from './book.svg';
import unlock from './unlock.png';
import zoom from './zoom.svg'; 


const Body2 = () =>{
    return(
        <div>
            <div className="club">
                <img src={pic}/>
                <h2>SUPERMILLER CLUB</h2>
                <p>Premium clud which rewards you everytime you drive with us</p>
                <p>SUPERMILLER PRIVILEGES</p>
            </div>
            <div className="club2">
                <p className="earn">Earn Z-Points for every booking and reedem for additional discount</p>
                <button className="learn">LEARN MORE</button>
                <h2>HOW ZOOMCAR WORKS</h2>
                <p className="info">Drive yourself to an adventure and back in 5 simple steps</p>
                <div className="grid">
                    <div className="container-1">
                        <img className="img" src={book}/>
                        <h4>BOOK</h4>
                        <p>Search for and book a car on<br/> our site!</p>
                    </div>
                    <div className="container-1">
                        <img className="img" src={dl}/>
                        <h4>UPLOAD LICENSE</h4>
                        <p>Upload your driver's license,<br/> and pay a small security<br/>  deposit.</p>
                    </div>
                    <div className="container-1">
                        <img className="unlock" src={unlock}/>
                        <h4>UNLOCK</h4>
                        <p>We SMS your car details 20<br/>  minutes before pickup. Unlock<br/>  it via the Zoomcar app.</p>
                    </div>
                    <div className="container-1">
                        <img className="img" src={zoom}/>
                        <h4>ZOOM</h4>
                        <p>Fill the start checklist in the<br/>  Zoomcar app. Grab the keys<br/>  from the glove-box and drive.</p>
                    </div>
                    <div className="container-1">
                        <img className="img" src={Return}/>
                        <h4>RETURN</h4>
                        <p>Return the car to the same<br/>  location and fill the end<br/>  checklist to end your trip.</p>
                    </div>
                </div>
                <button className="but">SIGN UP</button>
            </div>
            <div className="points">
                <p>EARN Z POINTS</p>
            </div>
        </div>
    )
}

export default Body2;