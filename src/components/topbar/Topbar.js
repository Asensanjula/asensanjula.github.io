import './topbar.scss'
import React from "react";
import {Person,Mail} from '@material-ui/icons';

function TopBar(props) {
    return (
        <div className="topBar">
            <div className="wrapper">
                <div className="left">
                    <a href="#portfolio" className="logo">PappZI</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+94 777 245 503</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>asensanjula@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;