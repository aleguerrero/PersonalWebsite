import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-me container" id="contact">
            <h2>Contact</h2>
            <div className='contact-me-container box'>
                <div className='contact-me-form-container'>
                    <div className='contact-me-text'>
                        <h3>Let's talk about your project!</h3>
                        <div className='contact-me-subtitle'>
                            Ready to bring your ideas to life? Let's create the perfect website together!
                        </div>
                    </div>
                    <form className='contact-me-form'>
                        <input type="input" className='form-field' placeholder="Your Name" name='name' id='name' required/>
                        <input type="input" placeholder="Your Email" className='form-field' name='email' id='email' required/>
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contact;