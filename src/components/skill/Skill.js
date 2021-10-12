import React from 'react';
import "./skill.scss"
import {OverlayTrigger, Tooltip} from "react-bootstrap";

function Skill(props) {
    return (
        <div className="skill" id="skill">
            <div className="left">
                <h1>Skills</h1>
            </div>
            <div className="right">
                <div className="wrapper">
                    <OverlayTrigger
                        key={"top-1"}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                HTML
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img className="svgImg" src={process.env.PUBLIC_URL + "/assets/skills/html.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key={"top-2"}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                CSS
                            </Tooltip>
                        }
                    >
                        <div className="skillItem">
                            <img src={process.env.PUBLIC_URL + "/assets/skills/css.svg"} alt=""/>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key={"top-3"}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                JAVASCRIPT
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/js.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key={"top-4"}
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                REACT JS
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/react.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key={"bottom-1"}
                        placement={'bottom'}
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                SCSS
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/sass.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key={"bottom-2"}
                        placement={'bottom'}
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                REDUX
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/redux.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key={"bottom-3"}
                        placement={'bottom'}
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                BOOTSTRAP
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/boostrap.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>

                    <OverlayTrigger
                        key={"bottom"}
                        placement={'bottom'}
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                REDUX SAGA
                            </Tooltip>
                        }
                    >
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/saga.svg"} alt=""/>
                    </div>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    );
}

export default Skill;