function CertificationsSection({ certifications }) {
  if (!certifications) return null;

  return (
    <section id="certificacoes" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{certifications.badge}</span>
          <h2 className="section-title">
            {certifications.title} <span>{certifications.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{certifications.subtitle}</p>
        </div>

        <div className="certifications-grid">
          {certifications.list.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-card-header">
                <div className="cert-icon-box">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-tag">{cert.tag}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
