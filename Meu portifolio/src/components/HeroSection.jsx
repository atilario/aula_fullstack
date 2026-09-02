function HeroSection({ personal }) {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status">
              <span className="status-indicator"></span>
              {personal.institution} • {personal.stats[0].number} Semestre
            </div>

            <h1 className="hero-title">
              Olá, eu sou <br />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <p className="hero-description">
              Estudante de Engenharia da Computação com foco em <strong>Data Science</strong>, <strong>Machine Learning</strong>, <strong>Desenvolvimento Full Stack</strong> e <strong>Sistemas Embarcados</strong>.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">
                <i className="fa-solid fa-rocket"></i> Ver Meus Projetos
              </a>
              <a href="#contato" className="btn btn-secondary">
                <i className="fa-solid fa-envelope"></i> Entrar em Contato
              </a>
            </div>

            <div className="hero-stats">
              {personal.stats.map((st, idx) => (
                <div key={idx} className="stat-item">
                  <h4>{st.number}</h4>
                  <p>{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-avatar-wrapper">
                <div className="profile-avatar">
                  <i className="fa-solid fa-user-astronaut"></i>
                </div>
                <div className="avatar-badge">
                  <i className="fa-solid fa-code"></i>
                </div>
              </div>
              <h3 className="profile-name">{personal.name}</h3>
              <p className="profile-role">{personal.title}</p>

              <div className="profile-tags">
                <span className="tech-chip">Python</span>
                <span className="tech-chip">React</span>
                <span className="tech-chip">Data Science</span>
                <span className="tech-chip">C / C++</span>
                <span className="tech-chip">Arduino</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

