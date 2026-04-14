import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "aditi.maheshwari@email.com",
    href: "mailto:aditi.maheshwari@email.com",
    ocid: "contact.email_link",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aditi-maheshwari-qa",
    href: "https://linkedin.com/in/aditi-maheshwari-qa",
    ocid: "contact.linkedin_link",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aditi-qa",
    href: "https://github.com/aditi-qa",
    ocid: "contact.github_link",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "#",
    ocid: "contact.location_info",
  },
];

type FormState = { name: string; email: string; message: string };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !form.email.includes("@"))
      errs.email = "Valid email is required";
    if (!form.message.trim() || form.message.length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background"
      aria-label="Contact"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-2">{"// ESTABLISH_CONNECTION"}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
          <p className="text-muted-foreground mt-4 max-w-xl">
            Open to QA Engineer roles, freelance testing projects, and
            collaborations. Let&apos;s connect and talk quality!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="glass neon-border rounded-lg p-6 space-y-2">
              <p className="section-label mb-4">CONTACT_DETAILS.json</p>
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href, ocid }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 p-3 rounded hover:bg-accent/5 transition-smooth group"
                  data-ocid={ocid}
                >
                  <div className="w-8 h-8 rounded border neon-border flex items-center justify-center shrink-0 group-hover:glow-accent transition-smooth">
                    <Icon size={14} className="neon-text" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
                      {label}
                    </p>
                    <p className="font-display text-sm text-foreground group-hover:neon-text transition-smooth">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass neon-border rounded-lg p-5 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse shrink-0" />
              <div>
                <p className="font-mono text-xs neon-text tracking-widest">
                  SYSTEM STATUS: AVAILABLE
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Currently open to full-time QA Engineer opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass neon-border rounded-lg p-6 sm:p-8">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle
                  size={48}
                  className="neon-text animate-[pulse-glow_2s_ease-in-out_infinite]"
                />
                <h3 className="font-display text-xl font-bold neon-text">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-muted-foreground">
                  Thank you! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="font-mono text-xs neon-text tracking-widest mt-2 hover:opacity-70 transition-smooth"
                  data-ocid="contact.send_another_button"
                >
                  [ SEND ANOTHER ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <p className="section-label mb-4">SEND_MESSAGE.form</p>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[10px] text-muted-foreground tracking-widest"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    onBlur={() =>
                      setErrors((errs) => ({
                        ...errs,
                        name: form.name.trim() ? undefined : "Name is required",
                      }))
                    }
                    placeholder="Your full name"
                    className="w-full bg-card/50 border border-border/50 focus:border-accent/60 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-smooth focus:glow-accent"
                    data-ocid="contact.name_input"
                  />
                  {errors.name && (
                    <p
                      className="font-mono text-[10px] text-destructive"
                      data-ocid="contact.name_field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[10px] text-muted-foreground tracking-widest"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full bg-card/50 border border-border/50 focus:border-accent/60 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-smooth"
                    data-ocid="contact.email_input"
                  />
                  {errors.email && (
                    <p
                      className="font-mono text-[10px] text-destructive"
                      data-ocid="contact.email_field_error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[10px] text-muted-foreground tracking-widest"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    rows={5}
                    placeholder="I'd like to discuss a QA role / project..."
                    className="w-full bg-card/50 border border-border/50 focus:border-accent/60 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-smooth resize-none"
                    data-ocid="contact.message_textarea"
                  />
                  {errors.message && (
                    <p
                      className="font-mono text-[10px] text-destructive"
                      data-ocid="contact.message_field_error"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full glass neon-border py-3 font-mono text-sm neon-text tracking-widest uppercase glow-accent-hover transition-smooth flex items-center justify-center gap-2"
                  data-ocid="contact.submit_button"
                >
                  <Send size={14} />[ TRANSMIT MESSAGE ]
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
