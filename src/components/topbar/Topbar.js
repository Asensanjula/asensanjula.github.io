import './topbar.scss'
import React from "react";
import {Person,Mail} from '@material-ui/icons';

function TopBar({openMenuBar, setOpenMenuBar}) {

    let logoName = "<|>";
    return (
        <div className={`topBar ${openMenuBar && 'active'}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">{logoName}</a>
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
                    <div className="hamburger" onClick={() => setOpenMenuBar(!openMenuBar)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        <span className="line4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;