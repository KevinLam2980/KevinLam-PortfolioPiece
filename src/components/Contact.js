import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Styled from "styled-components";
import * as yup from "yup";
import newContact from "../Validation/newContact";
import ReactQuill from "react-quill";

const SuccessMessage = Styled.p`
    /* transition: 0.4s ease-in-out;
    transform: scaleY(1); */
    margin: 0 auto 1rem auto;
    width: 85%;
    text-align: center;
    color: #212931;
    background-color: #23ba3a;
    padding: 0.75rem;
    z-index: 5;
    position: absolute;
    top: 0;
    box-shadow: 0px 1px 10px black;
`;

const FailMessage = Styled.p`
    transition: 0.4s ease-in-out;
    margin: 0 auto 1rem auto;
    width: 85%;
    text-align: center;
    color: #212931;
    background-color: #a31010;
    padding: 0.75rem;
    z-index: 5;
    position: absolute;
    top: 0;
    box-shadow: 0px 1px 10px black;
`;

let initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailFormValues, setEmailFormValues] = useState(initialFormValues);
  const [emailFormErrors, setEmailFormErrors] = useState(initialFormValues);
  const [formDisabled, setFormDisabled] = useState(true);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
  }

  function onHandleChange(e) {
    const { name, value } = e.target;
    yup
      .reach(newContact, name)
      .validate(value)
      .then((valid) => {
        setEmailFormErrors({
          ...setEmailFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setEmailFormErrors({
          ...emailFormErrors,
          [name]: err.errors[0],
        });
      });
    setEmailFormValues({
      ...emailFormValues,
      [name]: value,
    });
  }

    function contentChangeHandle(content) {
      yup
      .reach(newContact, "message")
      .validate(content.replace(/<[^>]*>/g, ''))
      .then((valid) => {
        setEmailFormErrors({
          ...emailFormErrors,
          message: "",
        });
      })
      .catch((err) => {
        setEmailFormErrors({
          ...emailFormErrors,
          message: err.errors[0],
        });
      });
    setEmailFormValues({
      ...emailFormValues,
      message: content.toString(),
    });
    }

  useEffect(() => {
    newContact.isValid(emailFormValues).then((valid) => {
      setFormDisabled(!valid);
    });
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gxzvmu7",
        "template_xbbrz01",
        e.target,
        "user_rey8jOSF8bjlw9NSzdz4m"
      )
      .then(
        (res) => {
          console.log(res.text);
          setSent(true);
          setTimeout(() => {
            setSent(false);
            setEmailFormValues(initialFormValues);
          }, 6000);
        },
        (err) => {
          console.log(err.text);
          setEmailError(true);
          setTimeout(() => {
            setEmailError(false);
          }, 5000);
        }
      );
  }

  return (
    <div id="contact">
      <section>
        {sent ? (
          <SuccessMessage>
            Your email was sent! Thank you for reaching out, I will get back to
            you as soon as I can.
          </SuccessMessage>
        ) : null}
        {emailError ? (
          <FailMessage>
            Error! A problem occured while trying to send your email! Please try
            again.
          </FailMessage>
        ) : null}
        <form onSubmit={sendEmail}>
          <div class="fields">
            <div class="field">
              <label htmlFor="name">Name</label>
              <div id="nameError" className="validationMessage">
                {emailFormErrors.name}
              </div>
              <input
                type="text"
                name="name"
                id="name"
                onChange={onHandleChange}
                value={emailFormValues.name}
              />
            </div>
            <div class="field">
              <label htmlFor="email">Email</label>
              <div id="emailError" className="validationMessage">
                {emailFormErrors.email}
              </div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={onHandleChange}
                value={emailFormValues.email}
              />
            </div>
            <div class="field">
              <label htmlFor="message">Message</label>
              <div id="messageError" className="validationMessage">
                {emailFormErrors.message}
              </div>
              <ReactQuill
                theme="snow"
                value={emailFormValues.message}
                onChange={contentChangeHandle}
                modules={modules}
                formats={formats} 
                placeholder="Type your message here."
              />
              <textarea 
                style={{ display: 'none' }}
                name="message"
                id="message" 
                value={emailFormValues.message}
                ></textarea>
            </div>
          </div>
          <input
            className="button"
            type="submit"
            value="Send"
            disabled={formDisabled}
          />
        </form>
      </section>

      <section class="split contact">
        <section>
          <h3>Phone</h3>
          <p className="contactInfo">(408) 532-3643</p>
        </section>
        <section>
          <h3>Email</h3>
          <p className="contactInfo">kev2980@gmail.com</p>
        </section>
        <section>
          <h3>Social</h3>
          <ul class="icons alt">
            <li>
              <a href="https://www.linkedin.com/in/kevin-lam-8729281a3/">
                <span class="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/KevinLam2980">
                <span class="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Contact;
