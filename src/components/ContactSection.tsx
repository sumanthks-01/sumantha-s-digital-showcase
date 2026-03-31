import SectionHeading from './SectionHeading';

const AnimatedInput = ({ name, type = 'text', label, required = true }: { name: string; type?: string; label: string; required?: boolean }) => (
  <div className="floating-input">
    <input name={name} type={type} required={required} placeholder=" " />
    <label>
      {label.split('').map((char, i) => (
        <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </label>
  </div>
);

const AnimatedTextarea = ({ name, label, rows = 5, required = true }: { name: string; label: string; rows?: number; required?: boolean }) => (
  <div className="floating-input floating-textarea">
    <textarea name={name} rows={rows} required={required} placeholder=" " />
    <label>
      {label.split('').map((char, i) => (
        <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </label>
  </div>
);

const ContactSection = () => (
  <section id="contact" className="py-24 section-border">
    <div className="max-w-3xl mx-auto">
      <SectionHeading subtitle="Have a question or want to work together? Send me a message.">
        Contact
      </SectionHeading>
      <form className="space-y-2" onSubmit={(e) => {
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
          <AnimatedInput name="name" label="Full Name" />
          <AnimatedInput name="email" type="email" label="Email Address" />
        </div>
        <AnimatedTextarea name="message" label="Message" />
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
