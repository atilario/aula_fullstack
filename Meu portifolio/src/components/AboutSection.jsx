function AboutSection({ personal, about }) {
  return (
    <section id="sobre" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{about.badge}</span>
          <h2 className="section-title">
            {about.title} <span>{about.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{about.subtitle}</p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <p className="about-paragraph">{about.p1}</p>

            <blockquote className="about-quote">
              <p>"{about.quote}"</p>
            </blockquote>

            <p className="about-paragraph">{about.p2}</p>
            <p className="about-paragraph">{about.p3}</p>
          </div>

          <div className="about-features-grid">
            {about.features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
