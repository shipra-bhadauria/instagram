import React from 'react';
import './Save.css';

const Save  = (props) => (
    <div id="mySave" className="overlay">
    <a className="closebtn" onClick={() => props.closeSave()}>&times;</a>
    <div className="overlay-content">
    <a href="">Share to Facebook</a>
    <a href="">Share to twitter</a>
    <a href="">Share to Messenger</a>
    <a href="">Share to Email</a>
    <a href="">Copy Link</a>
    </div>
    </div>
)

export default Save;