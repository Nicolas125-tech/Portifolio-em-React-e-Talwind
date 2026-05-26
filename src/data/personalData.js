// --- DADOS DO CURRÍCULO ---
export const personalData = {
  name: "Nicolas Mandarino",
  fullName: "Nicolas Mandarino Bissoqui",
  role: "Estudante de Engenharia de Software | Desenvolvedor Full Stack",
  location: "Londrina, PR, Brasil",
  email: "nicolasbissoqui@gmail.com",
  phone: "+55 43 98444-5767",
  linkedin: "https://www.linkedin.com/in/nicolas-mandarino-7787761b8",
  github: "https://github.com/nicolas125-tech",
  portfolio: "https://nicolas125-tech.github.io/Portifolio-em-React-e-Talwind/",
  about: "Estudante de Engenharia de Software focado no desenvolvimento de aplicações web modernas. Possuo sólida base prática em JavaScript, TypeScript, React, Node.js, Java e bases de dados (SQL). Tenho experiência na criação de projetos full stack e forte interesse em evoluir na área de desenvolvimento de software, Pipeline de entrega contínua e arquiteturas eficientes."
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "C#", "Java", "Python", "PHP", "SQL"],
  frontend: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Laravel", "APIs RESTful"],
  toolsAndTech: ["Git", "MySQL", "Swagger", "Testes de Software", "Engenharia de Dados", "Segurança da Informação"]
};

export const education = [
  {
    id: 1,
    course: "Bacharelato em Engenharia de Software",
    school: "Universidade Unopar",
    period: "Fev 2024 - Julho 2027 (Previsão)",
    status: "Cursando"
  }
];

export const experience = [
  {
    id: 1,
    role: "Analista Técnico Computacional",
    company: "Ágili Software",
    period: "Maio 2026 - Atual",
    description: "Análise, diagnóstico e resolução de problemas técnicos e lógicos em sistemas de software. Suporte técnico avançado, auxiliando na utilização das soluções tecnológicas da empresa. Elaboração de consultas e manipulação de base de dados (SQL) para análise de cenários e correção de falhas. Interação com a equipa de desenvolvimento para reporte de bugs e melhoria contínua dos sistemas."
  },
  {
    id: 2,
    role: "Técnico de Suporte (Help Desk) Estágio",
    company: "Helpdesk Londrina",
    period: "Jan 2026 - Maio 2026",
    description: "Prestação de suporte técnico de hardware e software para utilizadores. Manutenção preventiva e corretiva de computadores. Diagnóstico e resolução de problemas em redes e sistemas operativos."
  },
  {
    id: 3,
    role: "Professor de Música (Violino e Piano)",
    company: "Espaço Musical",
    period: "Jan 2023 - Dez 2025",
    description: "Lecionou aulas de violino e piano, desenvolvendo materiais didáticos personalizados. Condução de ensaios e prática de orquestra com grupos de alunos."
  }
];

export const allCertifications = [
  {
    category: "Segurança da Informação & Defesa Cibernética",
    items: [
      "Analista de Defesa Cibernética – IGTI / XP Educação",
      "Ethical Hacking e Pentest Profissional - Empire Cybersecurity"
    ]
  },
  {
    category: "Ecossistema JavaScript & Front-end",
    items: [
      "Full Stack JavaScript - OneBitCode",
      "Formação ReactJS & NodeJS - Rocketseat",
      "Angular and TypeScript - Dener Troquatte",
      "Especialista Front-End - EBAC",
      "Modern JavaScript ES6 for React - Udemy"
    ]
  },
  {
    category: "Back-end, Arquitetura & Java",
    items: [
      "Full Cycle 3.0 – FullCycle",
      "C# e .Net - Alura",
      "Arquitetura de Micros Serviços .Net 6 e C# - Leandro Costa",
      "Automação de Testes com Selenium WebDriver e C# - Hugo Peres",
      "Especialista Back-End Java – EBAC",
      "Ignite Java - Rocketseat",
      "Advanced Java - SoftBlue",
      "Treinamento Java EmpregaTech - Senac Londrina",
      "Laravel PHP / Full Stack PHP Developer - Udemy / UpInside"
    ]
  },
  {
    category: "Dados, Inteligência Artificial & Qualidade",
    items: [
      "Ignite AI Development - Rocketseat",
      "Engenheiro de Qualidade de Software - EBAC",
      "SQL Impressionador - Hashtag Treinamentos",
      "Data Engineering Bootcamp - IGTI",
      "Python Bootcamp - Udemy",
      "Android Development com Kotlin - Udemy"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AssistênciaTech",
    description: "Sistema completo de gestão para assistência técnica. Inclui portal público moderno com consulta de OS para clientes e um painel backoffice seguro para técnicos gerenciarem ordens de serviço, dashboard analítico e emissão automatizada de recibos em PDF.",
    tech: ["C#", ".NET 8", "ASP.NET Core MVC", "SQLite", "Docker", "Bootstrap"],
    githubUrl: "https://github.com/Nicolas125-tech/AssistenciaTech"
  },
  {
    id: 2,
    title: "ChikGuard",
    description: "Sistema IoT e Web de monitoramento inteligente para aviários utilizando visão computacional. Conta com API Python robusta, sistema de plugins de IA, painel de administração e relatórios automatizados, rodando com microsserviços via Docker.",
    tech: ["Python", "React", "Node.js", "Docker", "Supabase", "OpenCV"],
    githubUrl: "https://github.com/Nicolas125-tech/ChikGuard-Original"
  },
  {
    id: 3,
    title: "TripPlanner",
    description: "Aplicação Full Stack para planejamento e gestão de viagens, permitindo gerenciar roteiros e despesas de forma intuitiva.",
    tech: ["React", "Java", "Spring Boot", "Tailwind CSS"],
    githubUrl: "https://github.com/Nicolas125-tech/TripPlanner-React-e-Java"
  }
];
