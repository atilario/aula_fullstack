import { useState } from "react";
import { getEmailUrl, openEmailCompose, isMobileDevice } from "../utils/emailHelper";

function ContactSection({ contact, personal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.social.phoneFormatted || personal.social.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
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
            {/* WhatsApp & Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon whatsapp-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.phoneLabel || "WhatsApp / Phone"}</span>
                <a
                  href={personal.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-value"
                  title="Open WhatsApp"
                >
                  {personal.social.phoneFormatted || personal.social.phone}
                </a>
                <p className="contact-card-desc">
                  {personal.social.phone} • Salvador, BA
                </p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={personal.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-action whatsapp-action"
                  title="Open in WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>{contact.phoneAction || "WhatsApp"}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="btn-contact-action secondary"
                  type="button"
                  title="Copy phone number"
                >
                  <i className={`fa-regular ${copiedPhone ? "fa-circle-check" : "fa-copy"}`}></i>
                  <span>{copiedPhone ? contact.copied : contact.copyEmail?.replace("Email", "").replace("E-mail", "") || "Copiar"}</span>
                </button>
              </div>
            </div>

            {/* Email (Gmail) Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">{contact.emailLabel}</span>
                <a
                  href={getEmailUrl(personal.social.email)}
                  onClick={(e) => openEmailCompose(personal.social.email, e)}
                  target={isMobileDevice() ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="contact-card-value"
                  title="Send email"
                >
                  {personal.social.email}
                </a>
                <p className="contact-card-desc">{contact.emailDesc}</p>
              </div>
              <div className="contact-card-actions">
                <a
                  href={getEmailUrl(personal.social.email)}
                  onClick={(e) => openEmailCompose(personal.social.email, e)}
                  target={isMobileDevice() ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="btn-contact-action primary"
                  title="Send email"
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
                  <i className={`fa-regular ${copiedEmail ? "fa-circle-check" : "fa-copy"}`}></i>
                  <span>{copiedEmail ? contact.copied : contact.copyEmail}</span>
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
