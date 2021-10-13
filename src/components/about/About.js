import React from 'react';
import './about.scss'
import {School, Info, Favorite} from "@material-ui/icons";


function About(props) {
    return (
        <div className="about" id="about">
            <div className="left">
                <Info className="icon"/>
                <h3>about</h3>
                <p>Hello, my name is Asen. I'm a web developer living in <strong>Srilanka</strong>.
                    I have extensive programming experience and i'm comfortable developing on the
                    front end or backend. I love to specialize in JavaScript Technologies across the whole stack
                    (Node js, Express, React, Redux,) as my tech stack.</p>
            </div>
            <div className="middle">
                <School className="icon"/>
                <h3>education</h3>
                <div className="university">
                    <h4>B.Sc. (Hons) in Software Engineering</h4>
                    <p>University Of Colombo School Of Computing, Sri Lanka
                        <br/><span>2014 - 2018</span>
                    </p>

                </div>

            </div>
            <div className="right" >
                <Favorite className="icon"/>
                <h3>interests</h3>
                <div className="fav">
                    <ul>
                        <li>Travelling</li>
                        <li>Fishing</li>
                        <li>Cooking</li>
                        <li>Photography</li>
                        <li>Rugby | Carrom</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;