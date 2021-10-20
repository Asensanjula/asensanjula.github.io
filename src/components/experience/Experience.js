import React from 'react';
import './experience.scss';
import {Button} from "react-bootstrap";

function Experience(props) {
    return (
        <div className="experience" id="experience">
            <h2>projects</h2>
            <div className="wrapper">
                <div className="projectContainer">
                    <h5>eChanneling UI Revamp</h5>
                    <p>Re design and implement the  eChanneling website. So users can have efficient and user friendly experience</p>
                    <div className="btnGroup">
                        <a href="http://52.163.214.145/" target="_blank" className="btn btn-outline-warning">Website</a>
                        <Button variant="outline-warning">GitHub</Button>
                    </div>
                </div>
                <div className="projectContainer">
                    <h5>University Admission | UGC</h5>
                    <p>Automate the student registration for government universities in SriLanka</p>
                    <div className="btnGroup">
                        <Button disabled variant="outline-warning">Website</Button>
                        <Button variant="outline-warning">GitHub</Button>
                    </div>
                </div>

                <div className="projectContainer">
                    <h5>Grade 6 Admission | MOE</h5>
                    <p>This projects facilitate the student apply for new school who pass the Grade 5 Scholarship Examination and run the selection process.</p>
                    <div className="btnGroup">
                        <Button disabled variant="outline-warning">Website</Button>
                        <Button variant="outline-warning">GitHub</Button>
                    </div>
                </div>

                <div className="projectContainer">
                    <h5>TravelBox - CodeGen</h5>
                    <p>TravelBox is the main product of Codegen and it is a system of reservations, sales and administrations.</p>
                    <div className="btnGroup">
                        <Button disabled variant="outline-warning">Website</Button>
                        <Button variant="outline-warning">GitHub</Button>
                    </div>
                </div>

                <div className="projectContainer">
                    <h5>Karsha Price Pattern</h5>
                    <p>Through this, anyone will be able to get a basic idea about how stock prices variate within the S&P 500 indexes</p>
                    <div className="btnGroup">
                        <Button disabled variant="outline-warning">Website</Button>
                        <Button variant="outline-warning">GitHub</Button>
                    </div>
                </div>

                <div className="projectContainer">
                    <h5>Video conferencing System</h5>
                    <p>Fourth year group project - A video conferencing system which can be used for multiparty video conferencing, by using WebRTC technologies.</p>
                    <div className="btnGroup">
                        <Button disabled variant="outline-warning">Website</Button>
                        <Button variant="outline-warning">GitHub</Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;