import React from 'react';
import {Button, Form} from "react-bootstrap";
import './contact.scss'
import {Mail,LinkedIn,GitHub,Facebook} from "@material-ui/icons";

function Contact(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={process.env.PUBLIC_URL + "/assets/contact.jpg"} alt="Shake-icon"/>
            </div>
            <div className="right">
                <h2>Connect With Me</h2>
                <div className="contactList">
                    <a href="mailto: asensanjula@gmail.com" className=" btn btn-info">
                        <Mail className="icon"/>
                        Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/asensanjula/" target="_blank" className=" btn btn-success">
                        <LinkedIn className="icon"/>
                       LinkedIn
                    </a>
                    <a href="https://github.com/Asensanjula" target="_blank" className=" btn btn-dark">
                        <GitHub className="icon"/>
                        GitHub
                    </a>
                    <a href="https://www.facebook.com/asen.sanjula/" target="_blank"  className=" btn btn-primary">
                        <Facebook className="icon"/>
                        FaceBook
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact;