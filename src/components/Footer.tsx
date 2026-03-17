import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { icon: Github, href: "https://github.com/sumanthks-01" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sumantha-k-s" },
  { icon: Mail, href: "mailto:sumanthaskaraba@gmail.com" },
];

const Footer = () => (
  <footer className="py-12 mt-24 section-border">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <span className="text-muted-foreground text-sm">© 2024 Sumantha K S. Built with Precision.</span>
      <div className="flex items-center gap-6">
        {SOCIALS.map((social, i) => (
          <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
