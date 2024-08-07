const Contact = () => {
    return (
        <div className="contact-me container" id="contact">
            <h2>Contact</h2>
            <h3>Let's talk about your project!</h3>
            <form>
                <input placeholder="Your Name"/>
                <input placeholder="Your Email"/>
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default Contact;