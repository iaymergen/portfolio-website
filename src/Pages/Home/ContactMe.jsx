export default function ContactMe() {
    return (
        <section id="contact" className="contact-section">
            <div>
                <p className="sub-title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form className="contact-form-section">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input type="text"
                            className="contact-input text-md"
                            name="first-name"
                            id="first-name"
                            required />
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input type="text"
                            className="contact-input text-md"
                            name="last-name"
                            id="last-name"
                            required />
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email</span>
                        <input type="email"
                            className="contact-input text-md"
                            name="email"
                            id="email"
                            required />
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">Phone Number</span>
                        <input type="phone"
                            className="contact-input text-md"
                            name="phone-number"
                            id="phone-number"
                            required />
                    </label>
                </div>
                <div className="container2">
                    <label htmlFor="choose-topic" className="contact-label">
                        <span className="text-md">Choose Topic</span>
                        <select id="choose-topic"
                            className="contact-input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact-label">
                        <span className="text-md">Message</span>
                        <textarea
                            className="contact-input text-md"
                            id="message"
                            rows="8"
                            placeholder="Type Your Message"></textarea>
                    </label>
                    <label htmlFor="checkbox"
                        className="checkbox-label">
                        <input type="checkbox"
                            required
                            name="checkbox"
                            id="checkbox" />
                        <span className="text-sm">I accepct terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact-form-btn">Submit</button>
                    </div>
                </div>

            </form>

        </section>
    )
}