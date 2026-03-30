import SectionHeading from './SectionHeading';

const ContactSection = () => (
  <section id="contact" className="py-24 section-border">
    <div className="max-w-3xl mx-auto">
      <SectionHeading subtitle="Have a question or want to work together? Send me a message.">
        Contact
      </SectionHeading>
      <form className="space-y-6" onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.open(`mailto:sumanthaskaraba@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="form-label">Full Name</label>
            <input name="name" type="text" className="form-input" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <label className="form-label">Email Address</label>
            <input name="email" type="email" className="form-input" placeholder="john@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="form-label">Message</label>
          <textarea name="message" rows={5} className="form-input resize-none" placeholder="How can I help you?" required />
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
