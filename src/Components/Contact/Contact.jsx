import React from "react";
import "..//Contact/Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <div className="contact-text-container">
          <h4 className="contact-header">Book a call with me</h4>
          <p className="contact-heading">
            I'd love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move foward from there.
          </p>
        </div>

        <div className="btn-container">
          <a className="cta-button orange" href="/">
            Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
