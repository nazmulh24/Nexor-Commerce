import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <section className="section">
        <div className="container narrow">
          <h1>Contact Us</h1>
          <p>
            Email:{" "}
            <a href="mailto:sales@nexorcommerce.com">sales@nexorcommerce.com</a>
          </p>

          <form
            className="contact-form"
            action="mailto:sales@nexorcommerce.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="Full Name" type="text" required />
            </div>
            <div className="form-row">
              <label htmlFor="company">Company Name</label>
              <input id="company" name="Company Name" type="text" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="Email Address" type="email" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="Message"
                rows={6}
                required
              ></textarea>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>Find Us</h2>
          <div
            className="map-embed"
            role="region"
            aria-label="Map showing Nexor Commerce location"
          >
            <iframe
              title="Nexor Commerce location"
              src="https://maps.google.com/maps?q=Nexor%20Commerce&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
