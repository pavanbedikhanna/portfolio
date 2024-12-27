import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      href: "mailto:pavanbedikhanna@gmail.com",
      label: "pavanbedikhanna@gmail.com",
      icon: Mail
    },
    {
      href: "tel:716-907-9282",
      label: "+1 (716)-907-9282",
      icon: Phone
    },
    {
      href: "https://linkedin.com/in/bedikhannapavan",
      label: "bedikhannapavan",
      icon: Linkedin
    },
    {
      href: "https://github.com/pavanbedikhanna",
      label: "pavanbedikhanna",
      icon: Github
    },
  ];

  return (
    <footer className="border-t border-zinc-500 mt-auto bg-[var(--background)]">
      <div className="flex justify-between items-center p-6">
        <div className="text-sm text-[#10ae7a]">
          © {new Date().getFullYear()} Pavan Kulkarni Bedikhanna. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 hover:text-[#10ae7a] transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
