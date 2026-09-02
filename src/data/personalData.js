// --- DADOS DO CURRÍCULO ---
export const personalData = {
  name: "Nicolas Mandarino",
  fullName: "Nicolas Mandarino Bissoqui",
  role: "Estudante de Engenharia de Software | Desenvolvedor Full Stack",
  location: "Londrina, PR (CEP: 86063-250)",
  email: "nicolasbissoqui@gmail.com",
  phone: "+55 43 98444-5767",
  linkedin: "https://www.linkedin.com/in/nicolas-mandarino-bissoqui-7787761b8",
  github: "https://github.com/nicolas125-tech",
  portfolio: "https://nicolas125-tech.github.io/Portifolio-em-React-e-Talwind/",
  about: "Sou um Desenvolvedor Full Stack e estudante do 3º ano de Engenharia de Software. Desenvolvo aplicações web, desde o banco de dados até o frontend, e me interesso por Inteligência Artificial aplicada e Arquitetura de Sistemas. Trabalho como Analista Técnico Computacional na Ágili Software, onde atuo na manutenção e suporte de sistemas. Essa experiência diária me ajuda a analisar e resolver problemas técnicos com agilidade.",
  birthDate: "01/03/2005",
  nationality: "Brasileiro",
  cnh: "Categoria B",
  travelAvailability: "Sim",
  languages: [
    { name: "Inglês", level: "Intermediário" }
  ]
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "C#", "Java", "Python", "Kotlin", "SQL"],
  frontend: ["React", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "FastAPI", "Spring Boot", "ASP.NET MVC", "APIs RESTful"],
  mobile: ["React Native", "Kotlin"],
  ai: ["OpenCV", "YOLOv8"],
  toolsAndTech: ["Git", "PostgreSQL", "MongoDB", "Redis", "MySQL", "Docker", "GitHub Actions", "CI/CD", "AWS"]
};

export const education = [
  {
    id: 1,
    course: "Bacharelato em Engenharia de Software",
    school: "Universidade Unopar",
    period: "Fevereiro 2024 - Julho 2027",
    status: "Cursando"
  }
];

export const experience = [
  {
    id: 1,
    role: "Analista Técnico Computacional",
    company: "Agili Software",
    period: "Maio 2026 - Atual",
    isCurrent: true,
    description: "Suporte técnico auxiliando no uso dos sistemas da empresa. Analiso e resolvo problemas, crio consultas no banco de dados (SQL) para encontrar falhas e interajo com os desenvolvedores para relatar bugs e propor melhorias."
  },
  {
    id: 2,
    role: "Técnico de Suporte (Help Desk)",
    company: "Helpdesk Londrina",
    period: "Jan 2026 - Maio 2026",
    isCurrent: false,
    description: "Suporte técnico de hardware e software. Manutenção preventiva e corretiva de computadores. Diagnóstico e resolução de problemas em redes e sistemas operacionais."
  },
  {
    id: 3,
    role: "Professor de Música (Violino e Piano)",
    company: "Espaço Musical",
    period: "Janeiro 2023 - Outubro 2025",
    isCurrent: false,
    description: "Aulas de violino e piano com materiais didáticos personalizados. Condução de ensaios e prática de orquestra com os alunos."
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
    category: "Ecossistema JavaScript, Front-end & Mobile",
    items: [
      "Full Stack JavaScript - OneBitCode",
      "Ignite React/Node - Rocketseat",
      "Formação ReactJS & NodeJS - Rocketseat",
      "Angular and TypeScript - Dener Troquatte",
      "Especialista Front-End - EBAC",
      "Modern JavaScript ES6 for React - Udemy",
      "Formação Android com Kotlin - Rocketseat"
    ]
  },
  {
    category: "Back-end, Arquitetura & Java",
    items: [
      "Full Cycle 3.0 - FullCycle",
      "Especialista Back-End Java - EBAC",
      "Formação Java - Rocketseat",
      "Ignite Java - Rocketseat",
      "Advanced Java - SoftBlue",
      "Treinamento Java EmpregaTech - Senac Londrina",
      "Laravel PHP / Full Stack PHP Developer - Udemy / UpInside",
      "Formação em C# - Rocketseat"
    ]
  },
  {
    category: "Dados, Inteligência Artificial & Qualidade",
    items: [
      "Ignite AI Development - Rocketseat",
      "Deep Learning for Computer Vision with Python - PyImageSearch",
      "Python 3 Deep Dive - Udemy / Fred Baptista",
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
    title: "ChikGuard",
    description: "Monitoramento utilizando IA na borda (Edge Computing) e Visão Computacional para analisar a saúde de aves em granjas.",
    tech: ["Python", "FastAPI", "React", "React Native", "MongoDB", "PostgreSQL", "Docker", "YOLOv8", "OpenCV"],
    githubUrl: "https://github.com/Nicolas125-tech/ChikGuard-Original",
    featured: true,
    badgeText: "Principal Destaque"
  },
  {
    id: 2,
    title: "TechOS",
    description: "Sistema para gerenciar Ordens de Serviço (OS) em assistências técnicas, com foco em interface responsiva.",
    tech: ["C#", ".NET 8", "ASP.NET MVC", "PostgreSQL", "Redis", "Docker", "Bootstrap"],
    githubUrl: "https://github.com/Nicolas125-tech/AssistenciaTech",
    featured: true,
    badgeText: "Destaque"
  },
  {
    id: 3,
    title: "TripPlanner",
    description: "Aplicação para planejar e gerenciar rotas de viagens, integrando backend em Java e frontend em React.",
    tech: ["Java", "Spring Boot", "React", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/Nicolas125-tech/TripPlanner-React-e-Java",
    featured: true,
    badgeText: "Destaque"
  },
  {
    id: 4,
    title: "AgroTrace",
    description: "Sistema B2B para rastreamento de cargas de alto valor com funcionamento offline. Conecta dispositivos IoT ao aplicativo móvel e suporta grande volume de dados.",
    tech: ["Python", "FastAPI", "Next.js", "React Native", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Nicolas125-tech/AgroTrace",
    featured: true,
    badgeText: "Destaque"
  }
];
