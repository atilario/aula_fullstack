import { useState } from "react";

function ContactSection({ contact, personal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{contact.badge}</span>
          <h2 className="section-title">
            {contact.title} <span>{contact.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{contact.subtitle}</p>
        </div>

        <div className="contact-minimal-wrapper">
          <div className="contact-intro">
            <h3 className="contact-intro-title">{contact.infoTitle}</h3>
            <p className="contact-intro-desc">{contact.infoDesc}</p>
          </div>

          <div className="contact-cards-grid">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.emailLabel}</span>
                <a
                  href={`mailto:${personal.social.email}`}
                  className="contact-card-value"
                  title="Send an email"
                >
                  {personal.social.email}
                </a>
                <p className="contact-card-desc">{contact.emailDesc}</p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={`mailto:${personal.social.email}`}
                  className="btn-contact-action primary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>{contact.emailAction || "Send Email"}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn-contact-action secondary"
                  type="button"
                  title="Copy email to clipboard"
                >
                  <i className={`fa-regular ${copied ? "fa-circle-check" : "fa-copy"}`}></i>
                  <span>{copied ? contact.copied : contact.copyEmail}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.linkedinLabel}</span>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-value"
                >
                  linkedin.com/in/amcomp
                </a>
                <p className="contact-card-desc">{contact.linkedinDesc}</p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-action primary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>{contact.linkedinAction}</span>
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.githubLabel}</span>
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-value"
                >
                  github.com/atilario
                </a>
                <p className="contact-card-desc">{contact.githubDesc}</p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-action primary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>{contact.githubAction}</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card location-card">
              <div className="contact-card-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.locationLabel}</span>
                <span className="contact-card-value static-text">
                  {contact.locationValue}
                </span>
                <p className="contact-card-desc">{contact.locationSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
