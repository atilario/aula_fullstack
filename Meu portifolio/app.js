// ==========================================================================
// PORTFÓLIO ÁTILA LEITE - APLICAÇÃO REACT 18
// ==========================================================================

const { useState, useEffect, useMemo } = React;

// --- DADOS DA APLICAÇÃO ---
const portfolioData = {
  personal: {
    name: "Átila Leite",
    title: "Estudante de Engenharia da Computação • 6º Semestre",
    institution: "SENAI CIMATEC",
    bio: "Estudante do 6º semestre de Engenharia da Computação no SENAI CIMATEC. Focado em Data Science, Machine Learning, Desenvolvimento Full Stack e Programação de Sistemas (Python, C/C++ e Arduino). Apaixonado por transformar dados e tecnologia em soluções práticas e inovadoras.",
    stats: [
      { number: "6º", label: "Semestre CIMATEC" },
      { number: "6+", label: "Áreas de Estudo" },
      { number: "100%", label: "Foco & Dedicação" }
    ],
    social: {
      email: "atila.leite@email.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },

  skills: [
    {
      id: "py",
      name: "Python",
      category: "Dados & IA",
      level: 90,
      icon: "fa-brands fa-python",
      desc: "Automação, lógica avançada, scripts e ecossistema científico."
    },
    {
      id: "ds",
      name: "Data Science & Analytics",
      category: "Dados & IA",
      level: 85,
      icon: "fa-solid fa-chart-line",
      desc: "Tratamento, organização e análise exploratória de dados com Pandas e NumPy."
    },
    {
      id: "ml",
      name: "Machine Learning",
      category: "Dados & IA",
      level: 75,
      icon: "fa-solid fa-brain",
      desc: "Modelos preditivos, classificação, regressão e treinamento de algoritmos."
    },
    {
      id: "react",
      name: "React.js",
      category: "Full Stack & Web",
      level: 80,
      icon: "fa-brands fa-react",
      desc: "Desenvolvimento de interfaces modernas, SPA, Hooks e componentes reutilizáveis."
    },
    {
      id: "web",
      name: "HTML5 & CSS3 Moderno",
      category: "Full Stack & Web",
      level: 90,
      icon: "fa-brands fa-html5",
      desc: "Design responsivo, Glassmorphism, Flexbox, CSS Grid e animações fluidas."
    },
    {
      id: "cpp",
      name: "C & C++",
      category: "Linguagens & Sistemas",
      level: 80,
      icon: "fa-solid fa-code",
      desc: "Estruturas de dados, ponteiros, alocação dinâmica e eficiência de memória."
    },
    {
      id: "ard",
      name: "Arduino & Embarcados",
      category: "Hardware & IoT",
      level: 85,
      icon: "fa-solid fa-microchip",
      desc: "Integração de sensores, atuadores, controle de pinos e automação eletrônica."
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "Linguagens & Sistemas",
      level: 85,
      icon: "fa-brands fa-github",
      desc: "Controle de versão, commits estruturados, branches e repositórios colaborativos."
    }
  ],

  projects: [
    {
      id: 1,
      number: "01",
      title: "Data Science e Data Analytics",
      category: "Dados & IA",
      tags: ["Python", "Pandas", "Analytics", "Visualização"],
      shortDesc: "Análise, organização e interpretação de conjuntos de dados para extração de métricas relevantes e geração de gráficos estatísticos.",
      fullDesc: "Desenvolvimento de pipelines analíticos para exploração de dados, identificação de padrões e geração de relatórios visuais. Foco em transformação de dados brutos em inteligência para tomada de decisões estratégicas.",
      highlights: [
        "Limpeza e estruturação de bases de dados heterogêneas",
        "Geração de visualizações gráficas informativas",
        "Análise estatística descritiva e detecção de tendências"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Modelos de Machine Learning",
      category: "Dados & IA",
      tags: ["Machine Learning", "Scikit-Learn", "Python", "IA"],
      shortDesc: "Implementação de técnicas e algoritmos de aprendizado de máquina para resolver desafios preditivos e automatizar classificações.",
      fullDesc: "Projetos práticos explorando algoritmos supervisionados e não-supervisionados. Abrange desde a preparação de features até o treinamento, teste e avaliação métrica de performance dos modelos computacionais.",
      highlights: [
        "Pipeline de treinamento e validação cruzada",
        "Classificação, agrupamento e regressão",
        "Métricas de precisão, recall e matrizes de confusão"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Portfólio Web Interativo em React",
      category: "Full Stack & Web",
      tags: ["React 18", "JavaScript", "CSS3", "Glassmorphism"],
      shortDesc: "Aplicação moderna em React com tema Dark/Light dinâmico, filtros de busca em tempo real, modais e alta responsividade.",
      fullDesc: "Desenvolvido com arquitetura baseada em componentes funcionais e React Hooks. Utiliza design system completo com Glassmorphism, CSS Custom Properties e renderização fluida.",
      highlights: [
        "Alternância dinâmica de tema (Dark / Light Mode) persistente",
        "Busca e filtros reativos instantâneos em memória",
        "Experiência responsiva e animações de micro-interação"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Automação & Projetos com Arduino",
      category: "Hardware & IoT",
      tags: ["Arduino", "C++", "Eletrônica", "Sensores"],
      shortDesc: "Desenvolvimento de sistemas embarcados utilizando controle de portas, sinais analógicos/digitais e componentes eletrônicos.",
      fullDesc: "Projetos de engenharia que integram código em C++ com componentes físicos: LEDs, potenciômetros, botões, sensores e temporização de alta precisão.",
      highlights: [
        "Controle preciso de pinos PWM e sinais digitais/analógicos",
        "Lógica embarcada sem bloqueio com temporizadores de interrupção",
        "Integração prática de circuitos e prototipagem em protoboard"
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Programação e Algoritmos em Python",
      category: "Dados & IA",
      tags: ["Python", "Lógica", "Automação", "Scripts"],
      shortDesc: "Criação de scripts para resolução de problemas lógicos, automação de tarefas cotidianas e manipulação de arquivos.",
      fullDesc: "Conjunto de algoritmos e exercícios avançados de programação funcional e orientada a objetos em Python, enfatizando boas práticas, modularidade e tratamento de erros.",
      highlights: [
        "Funções puras, laços otimizados e condicionais robustas",
        "Tratamento de exceções e manipulação de arquivos",
        "Automação de rotinas com bibliotecas padrão"
      ]
    },
    {
      id: 6,
      number: "06",
      title: "Estruturas de Dados em C e C++",
      category: "Linguagens & Sistemas",
      tags: ["C", "C++", "Ponteiros", "Estruturas"],
      shortDesc: "Estudos de baixo nível com manipulação direta de ponteiros, vetores dinâmicos, registros e alocação de memória.",
      fullDesc: "Implementação aprofundada dos conceitos centrais da Ciência e Engenharia da Computação, explorando tempo de execução, ponteiros e gerenciamento manual de memória.",
      highlights: [
        "Manipulação avançada de ponteiros e endereços de memória",
        "Alocação dinâmica com malloc/free e new/delete",
        "Algoritmos de ordenação e busca com otimização de complexidade"
      ]
    }
  ],

  journey: [
    {
      step: "01",
      title: "Engenharia da Computação",
      institution: "SENAI CIMATEC",
      desc: "Início da graduação em uma das instituições de referência em tecnologia e engenharia do Brasil."
    },
    {
      step: "02",
      title: "Bases de Programação (C & C++)",
      institution: "Lógica & Algoritmos",
      desc: "Domínio dos fundamentos essenciais da computação: memória, tipos de dados, laços e ponteiros."
    },
    {
      step: "03",
      title: "Ciência de Dados & Python",
      institution: "Análise & Insights",
      desc: "Trabalho com análise de dados, estatística aplicada e exploração de bases com bibliotecas Python."
    },
    {
      step: "04",
      title: "Machine Learning & Inteligência Artificial",
      institution: "Modelos Preditivos",
      desc: "Aplicação prática de algoritmos de aprendizado de máquina para classificação e previsões com dados."
    },
    {
      step: "05",
      title: "Desenvolvimento Full Stack & React",
      institution: "Web Moderna",
      desc: "Construção de aplicações completas, combinando fundamentos de HTML/CSS com o ecossistema reativo do React."
    }
  ]
};

// ==========================================================================
// COMPONENTES REACT
// ==========================================================================

// --- NAVBAR ---
function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#inicio" className="nav-brand" onClick={closeMenu}>
          <span className="brand-dot"></span>
          Átila Leite
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#tecnologias" onClick={closeMenu}>Tecnologias</a></li>
          <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#jornada" onClick={closeMenu}>Jornada</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          <button
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu mobile"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

// --- HERO SECTION ---
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

// --- ABOUT SECTION ---
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

// --- SKILLS SECTION ---
function SkillsSection({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = useMemo(() => {
    const cats = ["Todos"];
    skills.forEach(s => {
      if (!cats.includes(s.category)) cats.push(s.category);
    });
    return cats;
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "Todos") return skills;
    return skills.filter(s => s.category === selectedCategory);
  }, [selectedCategory, skills]);

  return (
    <section id="tecnologias">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag blue">Competências Técnicas</span>
          <h2 className="section-title">Habilidades & <span>Tecnologias</span></h2>
          <p className="section-subtitle">
            Ferramentas, linguagens e frameworks que compõem meu conjunto de habilidades na Engenharia da Computação.
          </p>
        </div>

        <div className="skills-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-title-area">
                  <div className="skill-icon-wrapper">
                    <i className={skill.icon}></i>
                  </div>
                  <div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-category-badge">{skill.category}</span>
                  </div>
                </div>
              </div>

              <p className="skill-desc">{skill.desc}</p>

              <div className="skill-bar-container">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PROJECTS SECTION & MODAL ---
function ProjectsSection({ projects }) {
  const [filterCategory, setFilterCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const categories = ["Todos", "Dados & IA", "Full Stack & Web", "Hardware & IoT", "Linguagens & Sistemas"];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchCategory = filterCategory === "Todos" || p.category === filterCategory;
      const matchSearch = searchTerm === "" || 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [projects, filterCategory, searchTerm]);

  return (
    <section id="projetos">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Portfólio Prático</span>
          <h2 className="section-title">Projetos & <span>Trabalhos</span></h2>
          <p className="section-subtitle">
            Aplicações práticas em Ciência de Dados, Inteligência Artificial, Desenvolvimento Web e Hardware.
          </p>
        </div>

        <div className="projects-controls">
          <div className="search-input-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por nome, tag ou tecnologia..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="skills-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filterCategory === cat ? "active" : ""}`}
                onClick={() => setFilterCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(proj => (
            <div key={proj.id} className="project-card">
              <div className="project-card-header">
                <span className="project-number">{proj.number}</span>
                <span className="project-category-tag">{proj.category}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.shortDesc}</p>

                <div className="project-tech-tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="tech-chip">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn-details"
                    onClick={() => setActiveProject(proj)}
                  >
                    Ver Detalhes <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
            <p>Nenhum projeto encontrado com os termos de busca informados.</p>
          </div>
        )}

        {/* Modal de Detalhes */}
        {activeProject && (
          <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setActiveProject(null)}
                aria-label="Fechar"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="modal-header">
                <span className="modal-number">PROJETO {activeProject.number} • {activeProject.category}</span>
                <h3 className="modal-title">{activeProject.title}</h3>
                <div className="project-tech-tags">
                  {activeProject.tags.map((tag, i) => (
                    <span key={i} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="modal-body">
                <p>{activeProject.fullDesc}</p>

                <div className="modal-highlights">
                  <h4>Principais Destaques & Entregáveis:</h4>
                  <ul>
                    {activeProject.highlights.map((h, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// --- JOURNEY / TIMELINE SECTION ---
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
                <span className="project-category-tag" style={{ marginBottom: "10px", display: "inline-block" }}>
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

// --- CONTACT SECTION ---
function ContactSection({ personal }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <section id="contato">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Conecte-se</span>
          <h2 className="section-title">Vamos <span>Conversar?</span></h2>
          <p className="section-subtitle">
            Interessado em colaborar em projetos, pesquisas acadêmicas ou oportunidades profissionais? Entre em contato!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h3>Informações de Contato</h3>
              <p>Estou sempre aberto a novas conexões, parcerias de projetos e oportunidades de estágio na área de tecnologia.</p>

              <div className="contact-methods">
                <a href={`mailto:${personal.social.email}`} className="contact-method-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong>E-mail</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>{personal.social.email}</div>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-method-item">
                  <div className="contact-icon">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div>
                    <strong>LinkedIn</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Perfil Profissional</div>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-method-item">
                  <div className="contact-icon">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <strong>GitHub</strong>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Repositórios de Código</div>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>
              <i className="fa-solid fa-location-dot"></i> Salvador, Bahia • Brasil
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="form-success-banner">
                <i className="fa-solid fa-circle-check" style={{ fontSize: "1.3rem" }}></i>
                <div>
                  <strong>Mensagem registrada com sucesso!</strong>
                  <p style={{ fontSize: "0.88rem", marginTop: "4px" }}>
                    Obrigado pelo contato, {formData.name || "visitante"}. Em breve retornarei sua mensagem!
                  </p>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Seu Nome</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    className="form-input"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Seu E-mail</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="seuemail@dominio.com"
                    className="form-input"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Sua Mensagem</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Olá Átila, gostaria de conversar sobre uma oportunidade / projeto..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  <i className="fa-solid fa-paper-plane"></i> Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FOOTER ---
function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              © {new Date().getFullYear()} <strong>{personal.name}</strong> • {personal.institution}
            </p>
            <p style={{ fontSize: "0.8rem", marginTop: "4px" }}>
              Engenharia da Computação • Portfólio Construído com React 18 & Design System Moderno
            </p>
          </div>

          <div className="footer-tags">
            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              title="Voltar ao topo"
            >
              <i className="fa-solid fa-arrow-up"></i> Topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================================================
// COMPONENTE PRINCIPAL (APP)
// ==========================================================================
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme_preference") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme_preference", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-wrapper">
      {/* Luzes de Fundo Ambientais */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection personal={portfolioData.personal} />
      <AboutSection personal={portfolioData.personal} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <JourneySection journey={portfolioData.journey} />
      <ContactSection personal={portfolioData.personal} />
      <Footer personal={portfolioData.personal} />
    </div>
  );
}

// Renderização na raiz
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
