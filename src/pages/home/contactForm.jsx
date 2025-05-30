import React from "react";
import contact from "../../assets/images/contact-img.png"

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="contactForm">
            <div className="container">
                <div className="contact-form col-12">
                    <h1 data-aos="flip-up">Contact Us for Support and Inquiries</h1>
                    <p data-aos="flip-up">
                        Lorem ipsum dolor sit met, connecter adipiscing elit, Carabid tur
                        auctor Justo Lorem ipsum dolor sit met, connecter adipiscing elit
                    </p>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                id="name"
                                data-aos="flip-up"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input
                                id="Email"
                                data-aos="flip-up"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                id="phone"
                                data-aos="flip-up"
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                            />
                            <label htmlFor="Message" className="form-label">Message</label>
                            <textarea
                                id="Message"
                                data-aos="flip-up"
                                placeholder="Message"
                                className="form-control"
                            />
                            <button
                                style={{ width: "200px" }}
                                className="me-auto"
                                type="submit"
                                data-aos="flip-up"
                                onClick={handleSubmit}
                            >
                                Send
                            </button>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div class="image d-none d-md-block" data-aos="fade-up">
                                <img src={contact} alt="contact" width={"100%"}
                                    title="logo"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;