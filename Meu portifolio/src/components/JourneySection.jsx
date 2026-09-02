function JourneySection({ journey }) {
  return (
    <section id="jornada">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag blue">Evolução Contínua</span>
          <h2 className="section-title">Minha <span>Jornada</span></h2>
          <p className="section-subtitle">
            Linha do tempo dos marcos acadêmicos e do desenvolvimento de habilidades ao longo da minha formação.
          </p>
        </div>

        <div className="timeline-container">
          {journey.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-step">ETAPA {item.step}</div>
                <h3>{item.title}</h3>
                <span
                  className="project-category-tag"
                  style={{ marginBottom: "10px", display: "inline-block" }}
                >
                  {item.institution}
                </span>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;

