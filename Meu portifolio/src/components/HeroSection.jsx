function HeroSection({ personal, hero, lang }) {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-indicator"></span>
              <span>{hero.status}</span>
            </div>

            <h1 className="hero-title">
              {hero.greeting} <br />
              <span className="hero-name">{hero.name}</span>
            </h1>

            <p className="hero-headline">
              {hero.headline}
            </p>

            <p className="hero-description">
              {hero.description}
            </p>

            <div className="hero-actions">
              <a href="#experiencia" className="btn btn-primary">
                <i className="fa-solid fa-briefcase"></i> {lang === "en" ? "View Experience" : "Ver Experiência"}
              </a>
              <a href="#projetos" className="btn btn-secondary">
                {hero.viewProjects}
              </a>
              <a href="#contato" className="btn btn-secondary">
                {hero.getInTouch}
              </a>
            </div>

            <div className="hero-social-links">
              <a
                href={personal.social.gmailUrl || `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.social.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-btn"
                title="Send an Email via Gmail"
                aria-label="Gmail"
              >
                <i className="fa-regular fa-envelope"></i>
                <span className="social-link-text">{personal.social.email}</span>
              </a>

              <div className="social-icons-row">
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href={personal.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn whatsapp-btn"
                  title={`WhatsApp: ${personal.social.phone}`}
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="hero-stats">
              {personal.stats.map((st, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-number">{st.number}</span>
                  <span className="stat-label">{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src="/profile.png"
                  alt="Átila Mascarenhas"
                  className="profile-photo"
                />
              </div>

              <div className="profile-info">
                <h2 className="profile-name">{personal.name}</h2>
                <p className="profile-title">{personal.title}</p>
                <p className="profile-institution">
                  <i className="fa-solid fa-graduation-cap"></i> {personal.institution}
                </p>

                <div className="profile-chips">
                  {hero.tags.map((tag, idx) => (
                    <span key={idx} className="profile-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="profile-social-actions">
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-btn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                  </a>
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-btn"
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href={personal.social.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-btn"
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
