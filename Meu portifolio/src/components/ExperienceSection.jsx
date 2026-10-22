function ExperienceSection({ experience }) {
  if (!experience) return null;

  return (
    <section id="experiencia" className="section-padding section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{experience.badge}</span>
          <h2 className="section-title">
            {experience.title} <span>{experience.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{experience.subtitle}</p>
        </div>

        <div className="experience-timeline">
          {experience.list.map((item, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-marker">
                <span className="exp-dot"></span>
                <span className="exp-line"></span>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-role">{item.role}</h3>
                    <h4 className="experience-company">{item.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-badge">{item.badge}</span>
                    <span className="experience-period">{item.period}</span>
                  </div>
                </div>

                <p className="experience-desc">{item.desc}</p>
                <div className="experience-location">
                  <i className="fa-solid fa-location-dot"></i> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
