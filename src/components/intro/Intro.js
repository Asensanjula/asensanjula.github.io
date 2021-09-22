import React, {useEffect, useRef} from 'react';
import './intro.scss';
import { init } from 'ityped'


function Intro(props) {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,
            {
                showCursor: true,
                backDelay:1000,
                backSpeed:  60,
                strings: ['React JS', 'Bootstrap', 'Redux', 'Mongo DB' ]
            })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/man.png"} alt="profile"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There, I'm</h2>
                    <h1>Asen Sanjula</h1>
                    <h3>Front-End Developer | <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt=""/>
                </a>
            </div>
        </div>
    );
}

export default Intro;