export const portfolioData = {
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

