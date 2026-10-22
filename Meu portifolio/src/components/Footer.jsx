import { getEmailUrl, openEmailCompose, isMobileDevice } from "../utils/emailHelper";

function Footer({ footer, personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-title">
              © {new Date().getFullYear()} <strong>{personal.name}</strong> • {personal.institution}
            </p>
            <p className="footer-subtitle">{footer.sub}</p>
          </div>

          <div className="footer-social-links">
            <a
              href={getEmailUrl(personal.social.email)}
              onClick={(e) => openEmailCompose(personal.social.email, e)}
              target={isMobileDevice() ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="Email"
              aria-label="Email Átila"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              title="GitHub"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div className="footer-actions">
            <button
              onClick={scrollToTop}
              className="btn-back-to-top"
              title={footer.backToTop}
              type="button"
            >
              <i className="fa-solid fa-arrow-up"></i>
              <span>{footer.backToTop}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
