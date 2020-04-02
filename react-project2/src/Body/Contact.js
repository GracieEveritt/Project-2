import React from 'react';
import './Contact.css';

function Contact() {
    
    const onSubmit = () => {return false};
    
    return (
        <>
           <section id="about_href" className="container about_me">
                <h3 className="about_me_h3">About Me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptate? Consequatur distinctio ut
                    adipisci aperiam hic excepturi qui voluptatibus, pariatur voluptatum labore debitis architecto at veniam
                    nisi quod. Quaerat, perspiciatis!</p>
            </section>
        
            <section id="contact_href" className="container contact">
                <h3 className="contact_h3">Contact Me</h3>
                <form onSubmit={onSubmit}>
                    <input className="form_text" type="text" id="name" name="name" placeholder="Your name.." />
                    <input className="form_text" type="text" id="email" name="email" placeholder="Your email.." />
                    <input className="form_text" type="text" id="phone" name="phone" placeholder="Your phone number.." />
                    <textarea id="message" name="message" placeholder="Your message.." />
                    <input target="_self" type="submit" id="submit" value="Submit" />
                </form>
                <div id="message"></div>
            </section>
        </>
    );
  }
  
  export default Contact;