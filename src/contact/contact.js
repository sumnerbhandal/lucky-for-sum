import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.css";
import { MarketingBanner } from '../banners/marketing-banner';

export default function CountactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("Just Saying Hello");
  const [message, setMessage] = useState("");

  document.title = "Get In Touch - Lucky For Sum"

  const submitForm = (event) => {
    var template_params = {
      "subject": subject,
      "message": message,
      "customer_name": name,
      "customer_email": email
    }
    var service_id = "default_service";
    var template_id = "template_CJYQNlQH";
    emailjs.send(service_id, template_id, template_params, "user_10rKc8RZP6dDPRHSbtlbl");

    const formSpace = event.target;
    formSpace.innerHTML = `<h2>Form Sent - Thank You</h2>`;
  }

  return (
    <div className="PageContent">
    <MarketingBanner message="Get in touch!" />
    <div className="section loadup">
      <form onSubmit={submitForm} action="#0">
        <div>
        <label for="contact-name">Name</label>
          <input 
            required 
            id="contact-name" 
            type="text" 
            placeholder="Name"
            name="Name"
            onChange={e => setName(e.target.value)}
            autocompelete="new-password"
          />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input
            id="email" 
            type="email"
            placeholder="email@example.com"
            name="Email"
            required
            onChange={e => setEmail(e.target.value)}
            autocomplete="chrome-off"
          />
          <div class="requirements">
            Please enter a valid email address.
          </div>
        </div>
        <div>
        <label for="contact-subject">Subject</label>
          <select 
            name="Subject" 
            id="contact-subject"
            placeholder="Help with my order"
            onChange={e => setSubject(e.target.options[e.target.selectedIndex].text)}
            >
            <option value="1">Just Saying Hello</option>
            <option value="2">Delivery Query</option>
            <option value="3">Returns &amp; Refunds</option>
            <option value="4">Problem With A Product</option>
            <option value="5">Other</option>
          </select>
        </div>
        <div>
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
        <input className="action" type="submit" value="Sign Up" />
      </form>
    </div>
    </div>
  );
}
