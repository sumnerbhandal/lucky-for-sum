import React, { useState } from "react";
import emailjs from 'emailjs-com'
import "./contact.css"

export default function CountactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = (event) => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
    const isSubjectValid = subject !== "";

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.");
    }
    if (!isSubjectValid) {
      errors.push("Subject is not valid, please try again.");
    }
    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      var template_params = {
        "subject": subject,
        "message": message,
        "customer_name": name,
        "customer_email": message
     }
     
     var service_id = "default_service";
     var template_id = "template_CJYQNlQH";
     emailjs.send(service_id, template_id, template_params, "user_10rKc8RZP6dDPRHSbtlbl");

     const button = event.target;

     button.innerHTML = "Thanks for submitting";


    }
  }

  return (
    <div className="section">
              <h1>Get in touch!</h1>
        <div className="contact-form-container">
          <form className="">
            <div className="contact-name-container">
              <label for="contact-name">Name</label>
              <input 
                id="contact-name" 
                type="text" 
                autocomplete="name"
                placeholder="Name"
                name="Name"
                onChange={e => setName(e.target.innerHTML)}
                />
            </div>
            <div className="contact-email-container">
              <label for="contact-email">E-mail Address</label>
              <input
                  id="contact-name" 
                  type="email"
                  autocomplete="email"
                  placeholder="email@example.com"
                  name="Email"
                  onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="subject-container">
              <label for="contact-subject">Subject</label>
              <select 
                name="Subject" 
                id="contact-subject"
                placeholder="Help with my order"
                onChange={e => setSubject(e.target.value)}
                >
                <option value="1">Just Saying Hello</option>
                <option value="2">Delivery Query</option>
                <option value="3">Returns &amp; Refunds</option>
                <option value="4">Problem With A Product</option>
                <option value="5">Other</option>
              </select>
            </div>
            <div className="message-container">
              <label for="contact-message">Message</label>
              <textarea
                label="Message"
                placeholder="Message"
                type="text"
                name="Message"
                rows="4"
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul key={index}>{item}</ul>;
                })
              : null}
              <div>
            <button
              variant="contained"
              color="primary"
              type="button"
              onClick={formValidation}
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
  );
}
