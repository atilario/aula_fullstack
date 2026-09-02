function AboutSection({ personal }) {
  return (
    <section id="sobre">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Perfil Profissional</span>
          <h2 className="section-title">Sobre <span>Mim</span></h2>
          <p className="section-subtitle">
            Conheça minha trajetória na Engenharia da Computação e minhas principais frentes de atuação tecnológica.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Meu nome é <strong>{personal.name}</strong> e atualmente estou no 6º semestre de <strong>Engenharia da Computação no SENAI CIMATEC</strong>, uma das instituições de maior prestígio tecnológico do país.
            </p>
            <div className="highlight-box">
              <p>"Utilizar dados, algoritmos e engenharia para construir soluções que geram impacto real e eficiência."</p>
            </div>
            <p>
              Ao longo do curso, venho aprofundando meus conhecimentos em <strong>Data Science</strong>, <strong>Data Analytics</strong> e <strong>Machine Learning</strong>, aplicando métodos estatísticos e modelos de aprendizado para resolver problemas complexos.
            </p>
            <p>
              Paralelamente, domino o desenvolvimento <strong>Full Stack</strong> com <strong>HTML5, CSS3 moderno, JavaScript e React</strong>, além de sólida base em programação de baixo nível com <strong>C, C++ e automação de hardware com Arduino</strong>.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-database"></i>
              </div>
              <h3>Dados & Inteligência</h3>
              <p>Extração, análise e modelagem preditiva utilizando Python, Pandas e Scikit-Learn.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">
                <i className="fa-brands fa-react"></i>
              </div>
              <h3>Desenvolvimento Web</h3>
              <p>Aplicações modernas e dinâmicas com React, interfaces fluidas e foco em UX/UI.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Lógica & Sistemas</h3>
              <p>Fundamentos rigorosos de algoritmos, ponteiros e estruturas de dados em C e C++.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3>Hardware & Embarcados</h3>
              <p>Projetos com Arduino, sensores, temporização e controle eletrônico de circuitos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

