import React from 'react';
import './contact.scss'

function Contact(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={process.env.PUBLIC_URL + "/assets/shake.svg"} alt="Shake-icon"/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;