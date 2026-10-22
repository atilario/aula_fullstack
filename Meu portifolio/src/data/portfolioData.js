export const portfolioData = {
  en: {
    personal: {
      name: "Átila Mascarenhas",
      title: "Computer Engineering Student • 6th Semester",
      institution: "SENAI CIMATEC",
      bio: "6th-semester Computer Engineering student at SENAI CIMATEC. Focused on Data Science, Machine Learning, Systems Programming (Python, C/C++), and Embedded Systems / Hardware. Dedicated to solving complex problems through data, algorithms, and engineering.",
      stats: [
        { number: "6th", label: "Semester CIMATEC" },
        { number: "6+", label: "Core Fields" },
        { number: "100%", label: "Focus & Dedication" }
      ],
      social: {
        email: "atilalmmascarenhas@gmail.com",
        gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=atilalmmascarenhas@gmail.com",
        github: "https://github.com/atilario",
        linkedin: "https://www.linkedin.com/in/amcomp/"
      },
      location: "Salvador, Bahia • Brazil"
    },

    nav: {
      brand: "Átila Mascarenhas",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      journey: "Journey",
      contact: "Contact"
    },

    hero: {
      status: "SENAI CIMATEC • 6th Semester",
      greeting: "Hello, I am",
      name: "Átila Mascarenhas",
      description: "Computer Engineering student specializing in Data Science, Machine Learning, Systems Programming (C/C++, Python), and Embedded Systems.",
      viewProjects: "Explore Projects",
      getInTouch: "Get in Touch",
      role: "Computer Engineering • SENAI CIMATEC",
      tags: ["Data Science", "Machine Learning", "Python", "C / C++", "Embedded Systems", "SQL"]
    },

    about: {
      badge: "Background",
      title: "About",
      titleHighlight: "Me",
      subtitle: "My academic path in Computer Engineering and core engineering focus areas.",
      p1: "My name is Átila Mascarenhas and I am currently in the 6th semester of Computer Engineering at SENAI CIMATEC, one of the leading technological and industrial engineering institutions in Brazil.",
      quote: "Transforming raw data, algorithms, and hardware architecture into structured, real-world engineering solutions.",
      p2: "Throughout my engineering coursework, I have developed deep proficiency in Data Science, Data Analytics, and Machine Learning — applying statistical methods, feature engineering, and predictive algorithms to solve data-driven challenges.",
      p3: "Alongside analytical modeling, I build a strong foundation in low-level systems programming using C and C++, relational database design with SQL, and hardware integration using Arduino and embedded microcontrollers.",
      features: [
        {
          icon: "fa-solid fa-chart-line",
          title: "Data Science & AI",
          desc: "Exploratory analysis, predictive modeling, statistical computing, and pipelines with Python, Pandas, and Scikit-Learn."
        },
        {
          icon: "fa-solid fa-microchip",
          title: "Embedded Systems & Hardware",
          desc: "Microcontroller programming, sensor integration, digital/analog signal processing, and circuits with Arduino."
        },
        {
          icon: "fa-solid fa-terminal",
          title: "Systems & Algorithms",
          desc: "Rigorous algorithmic foundations, pointer arithmetic, dynamic memory allocation, and performance in C/C++."
        },
        {
          icon: "fa-solid fa-database",
          title: "Databases & Data Modeling",
          desc: "Relational database schema modeling, SQL optimization, data integrity constraints, and structured queries."
        }
      ]
    },

    skills: {
      badge: "Technical Stack",
      title: "Skills &",
      titleHighlight: "Technologies",
      subtitle: "Languages, tools, and technical competencies developed through academic and practical engineering work.",
      all: "All",
      categories: ["All", "Data & AI", "Systems & Low Level", "Hardware & Embedded"],
      list: [
        {
          id: "py",
          name: "Python",
          category: "Data & AI",
          level: 90,
          icon: "fa-brands fa-python",
          desc: "Scientific computing, data manipulation, algorithm design, and task automation scripts."
        },
        {
          id: "ds",
          name: "Data Science & Analytics",
          category: "Data & AI",
          level: 88,
          icon: "fa-solid fa-chart-line",
          desc: "Data cleaning, exploratory data analysis, feature engineering, and visualization with Pandas and NumPy."
        },
        {
          id: "ml",
          name: "Machine Learning",
          category: "Data & AI",
          level: 80,
          icon: "fa-solid fa-brain",
          desc: "Supervised and unsupervised models, classification, regression, model validation, and metrics with Scikit-Learn."
        },
        {
          id: "cpp",
          name: "C & C++",
          category: "Systems & Low Level",
          level: 82,
          icon: "fa-solid fa-code",
          desc: "Data structures, pointer arithmetic, manual dynamic memory management, and computational efficiency."
        },
        {
          id: "ard",
          name: "Arduino & Embedded Systems",
          category: "Hardware & Embedded",
          level: 85,
          icon: "fa-solid fa-microchip",
          desc: "Microcontroller firmware, GPIO control, analog/PWM signals, sensor telemetry, and circuit prototyping."
        },
        {
          id: "sql",
          name: "SQL & Relational Databases",
          category: "Data & AI",
          level: 80,
          icon: "fa-solid fa-database",
          desc: "Relational schema design, normalization, join queries, indexing, and data integrity enforcement."
        },
        {
          id: "git",
          name: "Git & GitHub",
          category: "Systems & Low Level",
          level: 85,
          icon: "fa-brands fa-github",
          desc: "Version control workflows, commit standards, branching strategies, and repository collaboration."
        },
        {
          id: "linux",
          name: "Linux & Bash",
          category: "Systems & Low Level",
          level: 78,
          icon: "fa-brands fa-linux",
          desc: "Command-line environment, shell scripting, environment management, and system navigation."
        }
      ]
    },

    projects: {
      badge: "Engineering Portfolio",
      title: "Featured",
      titleHighlight: "Projects",
      subtitle: "Applied work in Data Science, Machine Learning, Systems Programming, and Embedded Hardware.",
      searchPlaceholder: "Search by title, tag, or technology...",
      allCategory: "All",
      categories: ["All", "Data & AI", "Systems & Low Level", "Hardware & Embedded"],
      viewDetails: "View Details",
      modalHeading: "Key Highlights & Deliverables:",
      noResults: "No projects match the selected criteria.",
      list: [
        {
          id: 1,
          number: "01",
          title: "Data Science & Exploratory Analytics Pipeline",
          category: "Data & AI",
          tags: ["Python", "Pandas", "NumPy", "Analytics"],
          shortDesc: "End-to-end data pipeline for cleaning, analyzing, and extracting statistical intelligence from complex datasets.",
          fullDesc: "Development of data analysis pipelines aimed at transforming raw, unstructured datasets into reliable business and engineering intelligence. Focuses on handling missing data, identifying distributions, correlation analysis, and generating statistical charts.",
          highlights: [
            "Data wrangling and cleaning of heterogeneous raw datasets",
            "Descriptive statistics, outlier detection, and correlation analysis",
            "Automated generation of visual analytics and KPI metrics"
          ]
        },
        {
          id: 2,
          number: "02",
          title: "Predictive Machine Learning Modeling",
          category: "Data & AI",
          tags: ["Machine Learning", "Scikit-Learn", "Python", "Data Science"],
          shortDesc: "Supervised and unsupervised models for classification, regression, and algorithmic pattern detection.",
          fullDesc: "Practical implementation of machine learning workflows. Covers the complete pipeline: feature engineering, scaling, train/test cross-validation, hyperparameter tuning, and metric evaluation across multiple algorithms.",
          highlights: [
            "End-to-end pipeline with data preprocessing and feature scaling",
            "Supervised classification, clustering, and regression modeling",
            "Model performance evaluation with confusion matrices, precision, and recall"
          ]
        },
        {
          id: 3,
          number: "03",
          title: "Embedded Systems & Hardware Automation with Arduino",
          category: "Hardware & Embedded",
          tags: ["Arduino", "C++", "Electronics", "Sensors", "IoT"],
          shortDesc: "Microcontroller-based automation integrating sensors, actuators, and analog/digital signal calibration.",
          fullDesc: "Hardware engineering projects combining C++ firmware with physical electronics: sensors (temperature, distance, light), actuators, LEDs, pushbuttons, and precise event timing.",
          highlights: [
            "Non-blocking microcontroller loop logic using timers (millis)",
            "Analog/PWM signal calibration and sensor noise filtration",
            "Circuit integration and prototyping on breadboard"
          ]
        },
        {
          id: 4,
          number: "04",
          title: "Core Data Structures & Memory Management in C/C++",
          category: "Systems & Low Level",
          tags: ["C", "C++", "Memory Management", "Algorithms"],
          shortDesc: "Low-level implementation of core data structures, dynamic memory allocation, and algorithmic optimization.",
          fullDesc: "Rigorous exploration of computer science foundations through direct memory management. Implemented linked lists, stacks, queues, trees, and sorting algorithms with explicit pointer manipulation and complexity analysis (Big-O).",
          highlights: [
            "Pointer manipulation, address arithmetic, and dynamic allocation (malloc/free, new/delete)",
            "Leak-free memory profiling and algorithmic efficiency",
            "Implementation of recursive algorithms, search, and sorting procedures"
          ]
        },
        {
          id: 5,
          number: "05",
          title: "Python Automation & Computational Logic",
          category: "Data & AI",
          tags: ["Python", "Automation", "CLI", "Algorithms"],
          shortDesc: "Modular scripts and utilities for task automation, batch file processing, and algorithmic problem-solving.",
          fullDesc: "Collection of modular computational scripts designed to automate system tasks, batch data transformations, and solve complex algorithmic problems adhering to clean OOP and functional paradigms.",
          highlights: [
            "Robust exception handling, structured logging, and file I/O operations",
            "Task automation utilities with standard and scientific libraries",
            "Clean, maintainable, PEP8-compliant modular codebase"
          ]
        },
        {
          id: 6,
          number: "06",
          title: "Relational Database Modeling & SQL Architecture",
          category: "Data & AI",
          tags: ["SQL", "Databases", "Data Modeling", "Architecture"],
          shortDesc: "Relational schema design, normalization, indexed querying, and data integrity enforcement.",
          fullDesc: "Conceptual and logical database modeling for relational systems. Includes schema normalization, primary and foreign key constraint design, complex JOIN queries, aggregation functions, and query optimization.",
          highlights: [
            "Entity-Relationship (ER) diagramming and schema normalization (3NF)",
            "Optimized multi-table queries, subqueries, and grouping aggregations",
            "Data integrity enforcement through strict relational constraints"
          ]
        }
      ]
    },

    journey: {
      badge: "Academic Timeline",
      title: "My",
      titleHighlight: "Journey",
      subtitle: "Milestones and academic development throughout my Computer Engineering degree.",
      stepPrefix: "PHASE",
      list: [
        {
          step: "01",
          title: "Computer Engineering Degree",
          institution: "SENAI CIMATEC",
          desc: "Commenced undergraduate studies at SENAI CIMATEC, one of the premier institutions for technology, robotics, and engineering in Brazil."
        },
        {
          step: "02",
          title: "Foundations of Computing (C & C++)",
          institution: "Algorithms & Low-Level Architecture",
          desc: "Mastery of essential computational fundamentals: memory architecture, data types, pointers, and algorithmic complexity."
        },
        {
          step: "03",
          title: "Data Science & Python Ecosystem",
          institution: "Applied Analytics & Modeling",
          desc: "In-depth work in exploratory data analysis, statistics, data cleaning, and dataset transformation using Python, Pandas, and NumPy."
        },
        {
          step: "04",
          title: "Machine Learning & Predictive Intelligence",
          institution: "Predictive Models & Algorithms",
          desc: "Hands-on implementation of machine learning models for predictive analysis, classification, and statistical evaluation."
        },
        {
          step: "05",
          title: "Hardware Engineering & Embedded Systems",
          institution: "Microcontrollers & Physical Computing",
          desc: "Integration of physical systems with software using Arduino, microcontroller firmware, sensors, and electronic circuits."
        }
      ]
    },

    contact: {
      badge: "Direct Contact",
      title: "Get in",
      titleHighlight: "Touch",
      subtitle: "Interested in collaboration, engineering projects, or career opportunities? Connect directly with me.",
      infoTitle: "Let's Connect",
      infoDesc: "I am actively seeking internship opportunities, research collaborations, and engineering challenges. Feel free to reach out directly through any of the channels below:",
      emailLabel: "Email (Gmail)",
      emailDesc: "Click to compose message directly in Gmail",
      emailAction: "Open in Gmail",
      copyEmail: "Copy Email",
      copied: "Copied!",
      linkedinLabel: "LinkedIn Profile",
      linkedinDesc: "Connect professionally and view career updates",
      linkedinAction: "Open LinkedIn",
      githubLabel: "GitHub Profile",
      githubDesc: "Explore code repositories, projects, and algorithms",
      githubAction: "Open GitHub",
      locationLabel: "Location",
      locationValue: "Salvador, Bahia • Brazil",
      locationSub: "SENAI CIMATEC"
    },

    footer: {
      rights: "Átila Mascarenhas • SENAI CIMATEC",
      sub: "Computer Engineering • Data Science & Embedded Systems",
      backToTop: "Top"
    }
  },

  pt: {
    personal: {
      name: "Átila Mascarenhas",
      title: "Estudante de Engenharia da Computação • 6º Semestre",
      institution: "SENAI CIMATEC",
      bio: "Estudante do 6º semestre de Engenharia da Computação no SENAI CIMATEC. Focado em Data Science, Machine Learning, Programação de Sistemas (Python, C/C++) e Sistemas Embarcados / Hardware. Dedicado a resolver problemas complexos por meio de dados, algoritmos e engenharia.",
      stats: [
        { number: "6º", label: "Semestre CIMATEC" },
        { number: "6+", label: "Áreas de Estudo" },
        { number: "100%", label: "Foco & Dedicação" }
      ],
      social: {
        email: "atilalmmascarenhas@gmail.com",
        gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=atilalmmascarenhas@gmail.com",
        github: "https://github.com/atilario",
        linkedin: "https://www.linkedin.com/in/amcomp/"
      },
      location: "Salvador, Bahia • Brasil"
    },

    nav: {
      brand: "Átila Mascarenhas",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      journey: "Jornada",
      contact: "Contato"
    },

    hero: {
      status: "SENAI CIMATEC • 6º Semestre",
      greeting: "Olá, eu sou",
      name: "Átila Mascarenhas",
      description: "Estudante de Engenharia da Computação com foco em Data Science, Machine Learning, Programação de Sistemas (C/C++, Python) e Sistemas Embarcados.",
      viewProjects: "Ver Meus Projetos",
      getInTouch: "Entrar em Contato",
      role: "Engenharia da Computação • SENAI CIMATEC",
      tags: ["Data Science", "Machine Learning", "Python", "C / C++", "Sistemas Embarcados", "SQL"]
    },

    about: {
      badge: "Perfil Profissional",
      title: "Sobre",
      titleHighlight: "Mim",
      subtitle: "Minha trajetória acadêmica na Engenharia da Computação e principais áreas de atuação tecnológica.",
      p1: "Meu nome é Átila Mascarenhas e atualmente estou no 6º semestre de Engenharia da Computação no SENAI CIMATEC, uma das instituições de maior prestígio tecnológico e de engenharia do país.",
      quote: "Utilizar dados, algoritmos e engenharia para construir soluções práticas, estruturadas e de impacto real.",
      p2: "Ao longo do curso, venho aprofundando meus conhecimentos em Data Science, Data Analytics e Machine Learning, aplicando métodos estatísticos e modelos de aprendizado para resolver problemas complexos orientados a dados.",
      p3: "Paralelamente, possuo sólida base em programação de baixo nível com C e C++, modelagem de bancos de dados relacionais com SQL e computação física com Arduino e microcontroladores.",
      features: [
        {
          icon: "fa-solid fa-chart-line",
          title: "Dados & Inteligência",
          desc: "Análise exploratória, modelagem preditiva e computação estatística com Python, Pandas e Scikit-Learn."
        },
        {
          icon: "fa-solid fa-microchip",
          title: "Hardware & Embarcados",
          desc: "Programação de microcontroladores, integração de sensores, circuitos eletrônicos e automação com Arduino."
        },
        {
          icon: "fa-solid fa-terminal",
          title: "Sistemas & Algoritmos",
          desc: "Fundamentos rigorosos de algoritmos, ponteiros, alocação de memória e eficiência computacional em C e C++."
        },
        {
          icon: "fa-solid fa-database",
          title: "Bancos de Dados & SQL",
          desc: "Modelagem de esquemas relacionais, consultas otimizadas, integridade referencial e extração de dados."
        }
      ]
    },

    skills: {
      badge: "Competências Técnicas",
      title: "Habilidades &",
      titleHighlight: "Tecnologias",
      subtitle: "Linguagens, ferramentas e competências técnicas desenvolvidas ao longo da formação em engenharia.",
      all: "Todos",
      categories: ["Todos", "Dados & IA", "Linguagens & Sistemas", "Hardware & Embarcados"],
      list: [
        {
          id: "py",
          name: "Python",
          category: "Dados & IA",
          level: 90,
          icon: "fa-brands fa-python",
          desc: "Computação científica, manipulação de dados, algoritmos avançados e scripts de automação."
        },
        {
          id: "ds",
          name: "Data Science & Analytics",
          category: "Dados & IA",
          level: 88,
          icon: "fa-solid fa-chart-line",
          desc: "Limpeza, organização e análise exploratória de dados com Pandas e NumPy."
        },
        {
          id: "ml",
          name: "Machine Learning",
          category: "Dados & IA",
          level: 80,
          icon: "fa-solid fa-brain",
          desc: "Modelos preditivos, classificação, regressão e validação de algoritmos com Scikit-Learn."
        },
        {
          id: "cpp",
          name: "C & C++",
          category: "Linguagens & Sistemas",
          level: 82,
          icon: "fa-solid fa-code",
          desc: "Estruturas de dados, ponteiros, alocação dinâmica de memória e eficiência computacional."
        },
        {
          id: "ard",
          name: "Arduino & Embarcados",
          category: "Hardware & Embarcados",
          level: 85,
          icon: "fa-solid fa-microchip",
          desc: "Integração de sensores, atuadores, sinais digitais/PWM e prototipagem eletrônica."
        },
        {
          id: "sql",
          name: "SQL & Bancos de Dados",
          category: "Dados & IA",
          level: 80,
          icon: "fa-solid fa-database",
          desc: "Modelagem relacional, normalização, consultas estruturadas e integridade de dados."
        },
        {
          id: "git",
          name: "Git & GitHub",
          category: "Linguagens & Sistemas",
          level: 85,
          icon: "fa-brands fa-github",
          desc: "Controle de versão, commits estruturados, branches e repositórios colaborativos."
        },
        {
          id: "linux",
          name: "Linux & Bash",
          category: "Linguagens & Sistemas",
          level: 78,
          icon: "fa-brands fa-linux",
          desc: "Ambiente de terminal, shell scripting, configuração de ambiente e automação de rotinas."
        }
      ]
    },

    projects: {
      badge: "Portfólio Prático",
      title: "Projetos &",
      titleHighlight: "Trabalhos",
      subtitle: "Aplicações práticas em Ciência de Dados, Machine Learning, Sistemas e Hardware Embarcado.",
      searchPlaceholder: "Buscar por título, tag ou tecnologia...",
      allCategory: "Todos",
      categories: ["Todos", "Dados & IA", "Linguagens & Sistemas", "Hardware & Embarcados"],
      viewDetails: "Ver Detalhes",
      modalHeading: "Principais Destaques & Entregáveis:",
      noResults: "Nenhum projeto encontrado com os termos pesquisados.",
      list: [
        {
          id: 1,
          number: "01",
          title: "Pipeline de Data Science & Análise Exploratória",
          category: "Dados & IA",
          tags: ["Python", "Pandas", "NumPy", "Analytics"],
          shortDesc: "Pipeline analítico para limpeza, tratamento e extração de métricas estatísticas em bases complexas.",
          fullDesc: "Desenvolvimento de pipelines analíticos para exploração de dados, identificação de distribuições e geração de relatórios estatísticos visuais. Foco em transformar dados brutos em inteligência para tomada de decisões.",
          highlights: [
            "Limpeza e estruturação de bases de dados heterogêneas",
            "Análise estatística descritiva e detecção de tendências/correlações",
            "Geração de visualizações gráficas e relatórios analíticos"
          ]
        },
        {
          id: 2,
          number: "02",
          title: "Modelos Preditivos de Machine Learning",
          category: "Dados & IA",
          tags: ["Machine Learning", "Scikit-Learn", "Python", "Data Science"],
          shortDesc: "Implementação de algoritmos de aprendizado supervisionado e não-supervisionado para classificação e previsão.",
          fullDesc: "Projetos práticos explorando o ciclo completo de machine learning: engenharia de variáveis, normalização, validação cruzada, ajuste de hiperparâmetros e avaliação métrica de performance dos modelos computacionais.",
          highlights: [
            "Pipeline de pré-processamento, seleção de atributos e validação cruzada",
            "Modelagem de classificação supervisionada, agrupamento e regressão",
            "Métricas completas de avaliação com matrizes de confusão, precisão e recall"
          ]
        },
        {
          id: 3,
          number: "03",
          title: "Sistemas Embarcados & Automação com Arduino",
          category: "Hardware & Embarcados",
          tags: ["Arduino", "C++", "Eletrônica", "Sensores", "IoT"],
          shortDesc: "Soluções de computação física integrando microcontroladores, sensores e controle de atuadores.",
          fullDesc: "Projetos de engenharia integrando firmware em C++ com componentes físicos: sensores (temperatura, luminosidade, distância), LEDs, botões e temporização precisa sem bloqueios.",
          highlights: [
            "Controle de laço de eventos sem bloqueio com temporizadores de interrupção (millis)",
            "Calibração de sinais analógicos/PWM e filtragem de ruído de sensores",
            "Integração prática de circuitos e prototipagem em protoboard"
          ]
        },
        {
          id: 4,
          number: "04",
          title: "Estruturas de Dados e Gerenciamento em C/C++",
          category: "Linguagens & Sistemas",
          tags: ["C", "C++", "Ponteiros", "Estruturas", "Algoritmos"],
          shortDesc: "Estudos de baixo nível com manipulação direta de ponteiros, alocação dinâmica e eficiência algorítmica.",
          fullDesc: "Implementação aprofundada dos conceitos centrais da Ciência da Computação: listas encadeadas, pilhas, filas, árvores e algoritmos de ordenação, explorando ponteiros, alocação dinâmica e complexidade assintótica (Big-O).",
          highlights: [
            "Manipulação avançada de ponteiros e alocação dinâmica (malloc/free, new/delete)",
            "Gerenciamento rigoroso de memória sem vazamentos",
            "Implementação de rotinas eficientes de busca e ordenação"
          ]
        },
        {
          id: 5,
          number: "05",
          title: "Automação e Algoritmos em Python",
          category: "Dados & IA",
          tags: ["Python", "Automação", "CLI", "Algoritmos"],
          shortDesc: "Criação de scripts para resolução de problemas lógicos, automação de tarefas e processamento em lote.",
          fullDesc: "Conjunto de algoritmos e scripts avançados de programação modular e orientada a objetos em Python, enfatizando boas práticas, modularidade e tratamento de erros para automatizar tarefas cotidianas.",
          highlights: [
            "Tratamento robusto de exceções e manipulação de arquivos",
            "Automação de rotinas com bibliotecas padrão e científicas",
            "Código limpo, modular e aderente ao padrão PEP8"
          ]
        },
        {
          id: 6,
          number: "06",
          title: "Modelagem Relacional e Arquitetura SQL",
          category: "Dados & IA",
          tags: ["SQL", "Bancos de Dados", "Modelagem", "Sistemas"],
          shortDesc: "Modelagem conceitual e lógica de bancos de dados relacionais com consultas estruturadas e integridade de dados.",
          fullDesc: "Projeto de esquemas relacionais, normalização de dados, criação de restrições de integridade, índices e consultas complexas com múltiplos JOINs, subconsultas e funções agregadas.",
          highlights: [
            "Modelagem Entidade-Relacionamento e normalização (3FN)",
            "Consultas otimizadas com agregações e múltiplos relacionamentos",
            "Garantia de consistência e integridade referencial dos dados"
          ]
        }
      ]
    },

    journey: {
      badge: "Evolução Acadêmica",
      title: "Minha",
      titleHighlight: "Jornada",
      subtitle: "Linha do tempo dos marcos acadêmicos e do desenvolvimento de habilidades na graduação.",
      stepPrefix: "ETAPA",
      list: [
        {
          step: "01",
          title: "Engenharia da Computação",
          institution: "SENAI CIMATEC",
          desc: "Início da graduação em uma das instituições de maior referência em tecnologia e engenharia do Brasil."
        },
        {
          step: "02",
          title: "Bases de Programação (C & C++)",
          institution: "Lógica & Arquitetura de Sistemas",
          desc: "Domínio dos fundamentos essenciais da computação: memória, tipos de dados, laços, ponteiros e algoritmos."
        },
        {
          step: "03",
          title: "Ciência de Dados & Python",
          institution: "Análise Aplicada & Insights",
          desc: "Aprofundamento em análise exploratória, estatística aplicada e transformação de dados com o ecossistema Python."
        },
        {
          step: "04",
          title: "Machine Learning & Inteligência Artificial",
          institution: "Modelos Preditivos",
          desc: "Aplicação prática de algoritmos supervisionados e não-supervisionados para classificação e predição com dados."
        },
        {
          step: "05",
          title: "Hardware & Sistemas Embarcados",
          institution: "Microcontroladores & Computação Física",
          desc: "Integração de hardware e software com Arduino, sinais analógicos/digitais, sensores e circuitos eletrônicos."
        }
      ]
    },

    contact: {
      badge: "Contato Direto",
      title: "Vamos",
      titleHighlight: "Conversar",
      subtitle: "Interessado em colaborar em projetos de engenharia, pesquisas acadêmicas ou oportunidades profissionais? Entre em contato!",
      infoTitle: "Informações de Contato",
      infoDesc: "Estou sempre aberto a novas conexões, parcerias em projetos de dados/engenharia e oportunidades de estágio. Fique à vontade para entrar em contato diretamente pelos canais abaixo:",
      emailLabel: "E-mail (Gmail)",
      emailDesc: "Clique para abrir a tela de envio direto no Gmail",
      emailAction: "Abrir no Gmail",
      copyEmail: "Copiar E-mail",
      copied: "Copiado!",
      linkedinLabel: "Perfil no LinkedIn",
      linkedinDesc: "Conecte-se profissionalmente",
      linkedinAction: "Abrir LinkedIn",
      githubLabel: "Perfil no GitHub",
      githubDesc: "Explore repositórios de código e algoritmos",
      githubAction: "Abrir GitHub",
      locationLabel: "Localização",
      locationValue: "Salvador, Bahia • Brasil",
      locationSub: "SENAI CIMATEC"
    },

    footer: {
      rights: "Átila Mascarenhas • SENAI CIMATEC",
      sub: "Engenharia da Computação • Portfólio de Data Science & Sistemas Embarcados",
      backToTop: "Topo"
    }
  }
};
