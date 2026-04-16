import { useState } from 'react';
import { siteConfig } from '../siteConfig.js';
import { SectionHeading } from './SectionHeading.jsx';
import { SectionReveal } from './SectionReveal.jsx';

const initialFormState = {
  name: '',
  email: '',
  interest: 'Properties',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('interest', form.interest);
      formData.append('message', form.message);

      const response = await fetch('/submit-form.php', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
        setForm(initialFormState);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <SectionReveal className="contact__copy">
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's talk"
          />

          <div className="contact__cards">
            {siteConfig.contactCards.map((card) => (
              <a
                key={card.title}
                className="contact-card"
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>{card.title}</span>
                <strong>{card.value}</strong>
              </a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="contact__form-wrap" delay={120}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__grid">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Service Interest
              <select name="interest" value={form.interest} onChange={handleChange}>
                <option>Properties</option>
                <option>Facility Management</option>
                <option>Capital</option>
                <option>Hospitality</option>
                <option>Automotives</option>
                <option>Manufacturing &amp; Engineering</option>
                <option>Energy &amp; Minerals</option>
              </select>
            </label>

            <label>
              Project Brief
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you would like to build, improve, manage, or explore."
                rows="6"
                required
              />
            </label>

            <button
              type="submit"
              className="button button--primary button--full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Enquiry'}
            </button>
            {status === 'success' && (
              <p className="contact-form__note" style={{ color: 'green' }}>
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__note" style={{ color: 'red' }}>
                Failed to send. Please try again or contact us directly.
              </p>
            )}
{status === 'idle' && (
              <p className="contact-form__note">
                We'll get back you within 24 hours.
              </p>
            )}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}