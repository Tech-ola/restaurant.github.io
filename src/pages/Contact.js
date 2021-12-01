import React from "react";
import Pizzaleft from './../assets/pizzaLeft.jpg';
import './../styles/Contact.css'

function Contact(){
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url( ${Pizzaleft})`}}>  </div>
            <div className="rightSide">
                <h1>Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name="name" placeholder="Enter full name..." />
                    <input type="email" name="email" placeholder="Enter email..." />
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

        </div>
    );
}

export default Contact;