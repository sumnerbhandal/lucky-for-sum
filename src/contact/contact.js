import React, { useState } from "react";

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

  const formValidation = () => {
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
      alert("Email Sent");
    }
  };

  return (
    <div className="section">
      <div className="outerFormContainer">
        <img id="emailIcon" src="./emailIcon.png" alt="emailIcon" />
        <div className="innerFormContainer">
        <h1>Contact</h1>
          <form className="" data-netlify="true" netlify method="post" netlify-honeypot="bot-field">
            <input
              label="Name"
              placeholder="Jane Doe"
              type="text"
              variant="outlined"
              name="Name"
              onChange={e => setName(e.target.value)}
            />
            <input
              label="Email"
              placeholder="janedoe@gmail.com"
              type="email"
              variant="outlined"
              name="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              label="Subject"
              placeholder="Help with billing"
              type="text"
              variant="outlined"
              name="Subject"
              onChange={e => setSubject(e.target.value)}
            />
            <input
              label="Message"
              placeholder="Joe Doe"
              type="text"
              variant="outlined"
              multiline
              rowsMax="3"
              name="Message"
              onChange={e => setMessage(e.target.value)}
            />
            {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul key={index}>{item}</ul>;
                })
              : null}
            <button
              variant="contained"
              color="primary"
              type="button"
              onClick={formValidation}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
