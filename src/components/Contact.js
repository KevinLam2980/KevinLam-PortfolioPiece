import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Styled from "styled-components";
import * as yup from "yup";
import newContact from "../Validation/newContact";
import ReactQuill from "react-quill";
import { useNotification } from "./Notifications/NotificationsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { f1fa } from "@fortawesome/free-solid-svg-icons";

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
  const [emailFormValues, setEmailFormValues] = useState(initialFormValues);
  const [emailFormErrors, setEmailFormErrors] = useState(initialFormValues);
  const [formDisabled, setFormDisabled] = useState(true);

  const dispatchNotification = useNotification();

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

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

  function messageChangeHandle(content) {
    yup
      .reach(newContact, "message")
      .validate(content.replace(/<[^>]*>/g, ""))
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
          dispatchNotification({
            type: "SUCCESS",
            message: `Email sent successfully. Thank you for reaching out!`,
          });
          console.log(res.text);
        },
        (err) => {
          dispatchNotification({
            type: "ERROR",
            message: `Failure: ${err.text}`,
          });
          dispatchNotification({
            type: "ERROR",
            message: `Please try again, or reach out to me directly with my email.`,
          });
          console.error(err.text);
        }
      );
  }

  const testbanner = () => {
    dispatchNotification({
      type: "SUCCESS",
      message: `${Math.random()}`,
    });
  };

  return (
    <div id="contact">
      <section>
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
                onChange={messageChangeHandle}
                modules={modules}
                formats={formats}
                placeholder="Type your message here."
              />
              <textarea
                style={{ display: "none" }}
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
        {/* <section>
          <h3>Phone</h3>
          <p className="contactInfo">(408) 532-3643</p>
        </section> */}
        <section>
          <h3>Phone</h3>
          <p className="contactInfo">
            <FontAwesomeIcon icon={["fas", "mobile-alt"]} /> (408) 532-3643
          </p>
          <h3>Email</h3>
          <p className="contactInfo">
            <FontAwesomeIcon icon={["fas", "at"]} /> kev2980@gmail.com
          </p>
          <h3>Resume</h3>
          <a
            href="https://drive.google.com/file/d/1PFUVDt5NcNk9Sh2d96UhqqPa1QMStjv8/view?usp=sharing"
            alt="Resume google drive PDF link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="label">
              <FontAwesomeIcon icon={["fas", "file"]} /> Resume
            </span>
          </a>
        </section>
        <section>
          <h3>Socials</h3>
          <ul class="icons alt">
            <li>
              <a
                href="https://www.linkedin.com/in/kevin-lam-8729281a3/"
                alt="Linkedin profile link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="label">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} /> Linkedin
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KevinLam2980"
                alt="Github profile link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="label">
                  <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
                </span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Contact;
