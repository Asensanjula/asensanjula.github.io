import React from 'react';
import './experience.scss';

function Experience(props) {
    return (
        <div className="experience" id="experience">
            <div className="left">
                <h2><span>My Journey</span></h2>
                <div className="work_exp">
                    <div className="item">
                        <div className="item_img">
                            <img src={process.env.PUBLIC_URL + "/assets/company/mobitelLogo.png"} alt=""/>
                        </div>

                        <div className="item_desc">
                            <h4>Senior Software Engineer</h4>
                            <h6>Jan 2020 - Present</h6>
                        </div>

                    </div>
                    <div className="item">
                        <div className="item_img">
                        <img src={process.env.PUBLIC_URL + "/assets/company/cgLogo.png"} alt=""/>
                        </div>
                        <div className="item_desc">
                            <h4>Software Engineer</h4>
                            <h6>Jan 2018 - Jan 2020</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_img">
                            <img src={process.env.PUBLIC_URL + "/assets/company/lsfLogo.png"} alt=""/>
                        </div>
                        <div className="item_desc">
                            <h4>Intern - Software Engineer</h4>
                            <h6>Sept 2016 - Jan 2017</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_img">
                            <img  src={process.env.PUBLIC_URL + "/assets/company/fyraLogo.jpg"} alt=""/>
                        </div>
                        <div className="item_desc">
                            <h4>Co-Founder | Fyra.LK</h4>
                            <h6>Online Market Place</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Experience;