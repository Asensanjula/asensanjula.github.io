import React from 'react';
import "./skill.scss"

function Skill(props) {
    return (
        <div className="skill" id="skill">
            <div className="left">
                <h1>Skills</h1>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="skillItem">
                        <img className="svgImg" src={process.env.PUBLIC_URL + "/assets/skills/html.svg"} alt=""/>
                    </div>
                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/css.svg"} alt=""/>
                    </div>

                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/js.svg"} alt=""/>
                    </div>

                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/react.svg"} alt=""/>
                    </div>

                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/sass.svg"} alt=""/>
                    </div>

                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/redux.svg"} alt=""/>
                    </div>

                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/boostrap.svg"} alt=""/>
                    </div>

                    <div className="skillItem">
                        <img src={process.env.PUBLIC_URL + "/assets/skills/saga.svg"} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;