import React, {useEffect, useState} from 'react';
import "./skill.scss"
import {Nav, OverlayTrigger, Tooltip} from "react-bootstrap";

function Skill(props) {

    const [selectedKey, setSelectedKey] = useState('FE');

    let feWrapper =  <div className="wrapper">
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
    </div>;
    let beWrapper =  <div className="wrapper">
        <OverlayTrigger
            key={"top-1"}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    NODE JS
                </Tooltip>
            }
        >
            <div className="skillItem">
                <img className="svgImg" src={process.env.PUBLIC_URL + "/assets/skills/nodejs.svg"} alt=""/>
            </div>
        </OverlayTrigger>
        <OverlayTrigger
            key={"top-2"}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    SPRING BOOT
                </Tooltip>
            }
        >
            <div className="skillItem">
                <img src={process.env.PUBLIC_URL + "/assets/skills/spring.svg"} alt=""/>
            </div>
        </OverlayTrigger>

        <OverlayTrigger
            key={"top-3"}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    EXPRESS
                </Tooltip>
            }
        >
            <div className="skillItem">
                <img src={process.env.PUBLIC_URL + "/assets/skills/express.svg"} alt=""/>
            </div>
        </OverlayTrigger>

        {/*<OverlayTrigger*/}
        {/*    key={"top-4"}*/}
        {/*    placement={'top'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-top`}>*/}
        {/*            REACT JS*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/react.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom-1"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            SCSS*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/sass.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom-2"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            REDUX*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/redux.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom-3"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            BOOTSTRAP*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/boostrap.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            REDUX SAGA*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/saga.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}
    </div>;
    let dbWrapper =  <div className="wrapper">
        <OverlayTrigger
            key={"top-1"}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    MONGO DB
                </Tooltip>
            }
        >
            <div className="skillItem">
                <img className="svgImg" src={process.env.PUBLIC_URL + "/assets/skills/mongo.svg"} alt=""/>
            </div>
        </OverlayTrigger>
        <OverlayTrigger
            key={"top-2"}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    MYSQL
                </Tooltip>
            }
        >
            <div className="skillItem">
                <img src={process.env.PUBLIC_URL + "/assets/skills/mysql.svg"} alt=""/>
            </div>
        </OverlayTrigger>

        <OverlayTrigger
            key={"top-3"}
            placement={'top'}
            overlay={
                <Tooltip id={`tooltip-top`}>
                    FIRESTORE
                </Tooltip>
            }
        >
            <div className="skillItem">
                <img src={process.env.PUBLIC_URL + "/assets/skills/firebase.svg"} alt=""/>
            </div>
        </OverlayTrigger>

        {/*<OverlayTrigger*/}
        {/*    key={"top-4"}*/}
        {/*    placement={'top'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-top`}>*/}
        {/*            REACT JS*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/react.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom-1"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            SCSS*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/sass.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom-2"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            REDUX*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/redux.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom-3"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            BOOTSTRAP*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/boostrap.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}

        {/*<OverlayTrigger*/}
        {/*    key={"bottom"}*/}
        {/*    placement={'bottom'}*/}
        {/*    overlay={*/}
        {/*        <Tooltip id={`tooltip-bottom`}>*/}
        {/*            REDUX SAGA*/}
        {/*        </Tooltip>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <div className="skillItem">*/}
        {/*        <img src={process.env.PUBLIC_URL + "/assets/skills/saga.svg"} alt=""/>*/}
        {/*    </div>*/}
        {/*</OverlayTrigger>*/}
    </div>;
    let wrapper = "";

    if (selectedKey === 'FE') {
        wrapper = feWrapper;
    }
    else if (selectedKey === 'BE'){
        wrapper = beWrapper;
    }
    else if (selectedKey === 'DB'){
        wrapper = dbWrapper;
    }


    return (
        <div className="skill" id="skill">
            <div className="left">
                <h1>Skills</h1>
                <Nav variant="pills" defaultActiveKey="link-0">
                    <Nav.Item onClick={() => setSelectedKey("FE")}>
                        <Nav.Link eventKey="link-0" >Front End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => setSelectedKey("BE")}>
                        <Nav.Link eventKey="link-1" >Back End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => setSelectedKey("DB")} >
                        <Nav.Link eventKey="link-2" >Database</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="right">
                {wrapper}
            </div>
        </div>
    );
}

export default Skill;