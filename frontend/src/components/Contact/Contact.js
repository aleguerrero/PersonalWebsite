import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {

    const [phase, setPhase] = useState("form");
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPhase("fadeForm");

        try {
            const response = await fetch("http://localhost:3000/api/email/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Form submitted successfully!");
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                console.log("Error submitting form.")
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        if (phase == 'fadeForm') {
            const fadeOutFormTimer = setTimeout(() => {
                setShowMessage(true);
                setPhase('message');
            }, 500);

            return () => clearTimeout(fadeOutFormTimer);
        }

        if (phase == 'message') {
            const displayMessageTimer = setTimeout(() => {
                setPhase('fadeMessage');
            }, 2000);

            return () => clearTimeout(displayMessageTimer);
        }

        if (phase == 'fadeMessage') {
            const fadeOutMessageTimer = setTimeout(() => {
                setShowMessage(false);
                setPhase('form');
            }, 500);

            return () => clearTimeout(fadeOutMessageTimer);
        }
    }, [phase])


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
                    <div className={'contact-me-form-wrapper' + ` fade-wrapper ${phase == 'fadeForm' || phase == 'fadeMessage' ? 'fade-out' : 'fade-in'}`}>
                        {showMessage ? (
                            <div className={"contact-me-successful"}>
                                <h2>Thank you for your email!</h2>
                            </div>
                        ) : (
                            <form className={`contact-me-form`} onSubmit={handleSubmit}>
                                <input type="input" className='form-field' placeholder="Your Name" name='name' id='name' value={formData.name} onChange={handleChange} required />
                                <input type="input" placeholder="Your Email" className='form-field' name='email' id='email' value={formData.email} onChange={handleChange} required />
                                <textarea placeholder="Your Message" name='message' value={formData.message} onChange={handleChange}></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;