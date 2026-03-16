import SectionHeading from './SectionHeading';

const ContactSection = () => (
  <section id="contact" className="py-24 section-border">
    <div className="max-w-3xl mx-auto">
      <SectionHeading subtitle="Have a question or want to work together? Send me a message.">
        Contact
      </SectionHeading>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="john@example.com" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="form-label">Message</label>
          <textarea rows={5} className="form-input resize-none" placeholder="How can I help you?" />
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
