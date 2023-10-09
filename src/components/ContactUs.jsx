import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  const nameHandler = (e) => {
    let item = e.target.value;
    if (item.length <= 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(item);
  };

  const emailHandler = (e) => {
    let item = e.target.value;
    if (!item.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(item);
  };

  const messageHandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    setMessage(item);
  };

  return (
    <div id="contact">
      <div className="upper">
        <div className="paras">
          <p className="heading-contact">Newslleter</p>
          <p className="para-contact">
            Get news about articles and updates in your inbox.
          </p>
        </div>
        <div className="div-form" onSubmit={handelSubmit}>
          <form action="post" className="form">
            <input
              type="text"
              name=""
              id=""
              placeholder="NAME"
              required
              value={name}
              onChange={nameHandler}
            />

            {nameError && (
              <span
                style={{
                  marginTop: "-16px",
                  marginLeft: "15px",
                  color: "red",
                  position: "relative",
                  left: "0px",
                  bottom: "15px",
                }}
              >
                *name should be 3 characters long
              </span>
            )}
            <input
              type="email"
              name=""
              id=""
              placeholder="EMAIL"
              required
              value={email}
              onChange={emailHandler}
            />
           
            {emailError && (
              <span
                style={{
                  marginTop: "-16px",
                  marginLeft: "15px",
                  color: "red",
                  position: "relative",
                  left: "0px",
                  bottom: "15px",
                }}
              >
                *please enter a valid e-mail
              </span>
            )}
            <input
              type="text"
              name=""
              id=""
              placeholder="MESSAGE"
              required
              value={message}
              onChange={messageHandler}
            />
            
            {messageError && (
              <span
                style={{
                  marginTop: "-16px",
                  marginLeft: "15px",
                  color: "red",
                  position: "relative",
                  left: "0px",
                  bottom: "15px",
                }}
              >
                *message should be 3 characters long
              </span>
            )}
            <button>SEND</button>
          </form>
        </div>
      </div>

      <div className="lower">
        <p>
          GET
          <br />
          IN TOUCH
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
