function JourneySection({ journeyData }) {
  return (
    <section id="jornada" className="section-padding section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{journeyData.badge}</span>
          <h2 className="section-title">
            {journeyData.title} <span>{journeyData.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{journeyData.subtitle}</p>
        </div>

        <div className="minimal-timeline">
          {journeyData.list.map((item, idx) => (
            <div key={idx} className="timeline-node">
              <div className="timeline-marker">
                <span className="marker-dot"></span>
                <span className="marker-line"></span>
              </div>
              <div className="timeline-content-card">
                <div className="timeline-header-line">
                  <span className="timeline-step-badge">
                    {journeyData.stepPrefix} {item.step}
                  </span>
                  <span className="timeline-institution">{item.institution}</span>
                </div>
                <h3 className="timeline-heading">{item.title}</h3>
                <p className="timeline-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
