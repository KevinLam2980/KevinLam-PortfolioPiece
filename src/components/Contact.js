import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import Styled from 'styled-components'

const SuccessMessage = Styled.p`
    transition: 0.3s ease-in-out;
    margin: 0 auto 1rem auto;
    width: 75%;
    text-align: center;
    color: #212931;
    background-color: #23ba3a;
`

const FailMessage = Styled.p`
    transition: 0.3s ease-in-out;
    margin: 0 auto 1rem auto;
    width: 75%;
    text-align: center;
    color: #212931;
    background-color: #a31010;
`

let initialFormValues = {
    name: "",
    email: "",
    message: ""
}

const Contact = props => {
    const [sent, setSent] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailFormValues, setEmailFormValues] = useState(initialFormValues)

    useEffect(() => {
        document.getElementById("scrollerBTN").click()
      }, [])

    function onHandleChange(e){
        setEmailFormValues({... emailFormValues, [e.target.name]: e.target.value})
    }

    function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm('service_gxzvmu7', 'template_xbbrz01', e.target, 'user_rey8jOSF8bjlw9NSzdz4m')
        .then((res) => {
            console.log(res.text)
            setSent(true)
            setTimeout(() => {
                setSent(false)
                setEmailFormValues(initialFormValues)
            }, 6000)
        }, (err) => {
            console.log(err.text)
            setEmailError(true)
            setTimeout(() => {
                setEmailError(false)
            }, 5000)
        })
    }

    return (
        <div id="contact">
        <section>
            {sent ? <SuccessMessage>Your email was sent! Thank you for reaching out, I will get back to you as soon as I can.</SuccessMessage> : null}
            {emailError ? <FailMessage>Error! A problem occured while trying to send your email! Please try again.</FailMessage> : null}
            <form onSubmit={sendEmail}>
                <div class="fields">
                    <div class="field">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={onHandleChange} 
                        value={emailFormValues.name}/>
                    </div>
                    <div class="field">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={onHandleChange} 
                        value={emailFormValues.email}/>
                    </div>
                    <div class="field">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" 
                        id="message" 
                        rows="5"
                        onChange={onHandleChange} 
                        value={emailFormValues.message}
                        ></textarea>
                    </div>
                </div>
                    <input className="button"type="submit" value="Send" />
            </form>
        </section>
{/* 
        <section class="split contact">
            <section>
                <h3>Phone</h3>
                <p><a href="#">(000) 000-0000</a></p>
            </section>
            <section>
                <h3>Email</h3>
                <p><a href="#">kev2980@gmail.com</a></p>
            </section>
            <section>
                <h3>Social</h3>
                <ul class="icons alt">
                    <li><a href="https://www.linkedin.com/in/kevin-lam-8729281a3/" class="icon brands alt fa-instagram"><span class="label">Linkedin</span></a></li>
                    <li><a href="https://github.com/KevinLam2980" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </section>
        </section> */}
    </div> 
    )
}

export default Contact