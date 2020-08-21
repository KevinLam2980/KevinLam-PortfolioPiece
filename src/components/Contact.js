import React from 'react'

const Contact = props => {

    return (
        <div id="contact">
        <section>
            <form method="post" action="#">
                <div class="fields">
                    <div class="field">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div class="field">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div class="field">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                </div>
                    <input className="button"type="submit" value="Send Message" />
            </form>
        </section>

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
        </section>
    </div> 
    )
}

export default Contact