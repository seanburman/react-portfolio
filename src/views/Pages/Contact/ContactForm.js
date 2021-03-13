import React, { useState } from "react";
import * as Windows from '../../../components/windows/Windows'
import './ContactForm.css';

var submit_msg = ""

const ShowStatus = ({header}) => {

  console.log(header)

  const messages = {
    sent: "Your message was sent successfully!",
    fail: "Your message failed to send"
  }

  let status = header === "SUCCESS" ? "true" : "false"
  const message = status === "true" ? messages.sent : messages.fail
  submit_msg = message

  return (
    <React.Fragment>
      <h2 className="message-sent">Message Sent</h2>
      <p>Thank you for reaching out to me! <br />I will respond to your message via email within 24 hours.</p>
    </React.Fragment>
   
  )
}

const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");
  const [alert, setAlert ] = useState(false);
  const [ header, setHeader ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://safe-chamber-60817.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json"
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setHeader(result.status)
    setAlert(true)
    setStatus(submit_msg)
    
  };
  return (
    <React.Fragment>
    <Windows.Window>
    <Windows.Solo space>
    {
      alert === false &&
    <div className="form-wrapper">
          <form onSubmit={handleSubmit} id="contact-form">
          <div className="field">
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" required />
          </div>
          <div className="field"> 
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" required />
          </div>
          <button type="submit" className="form-button">{status}</button>
          
    
        </form>
    </div>
    }
    {
      alert === true && <ShowStatus header={header} />
    }
    </Windows.Solo>
    </Windows.Window>
    
    </React.Fragment>
  );
};

export default ContactForm;