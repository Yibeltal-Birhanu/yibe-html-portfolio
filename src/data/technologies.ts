export interface Technology {
  name: string;
  category: string;
  usage: string[];
  projects: string[];
  color: string;
}

export const technologies: Technology[] = [
  {
    name: "Python",
    category: "Language",
    usage: ["AI / ML", "Data Processing", "Backend APIs"],
    projects: ["AI Job Recommender", "AI Interviewer"],
    color: "#3776AB",
  },
  {
    name: "C#",
    category: "Language",
    usage: ["Backend", "Enterprise Software", ".NET Ecosystem"],
    projects: ["Property Marketplace", "Inventory Management"],
    color: "#239120",
  },
  {
    name: ".NET",
    category: "Framework",
    usage: ["Web Development", "API Development", "Enterprise"],
    projects: ["Property Marketplace", "Inventory Management"],
    color: "#512BD4",
  },
  {
    name: "ASP.NET Core",
    category: "Framework",
    usage: ["Web APIs", "MVC", "Authentication", "Backend"],
    projects: ["Property Marketplace", "Inventory Management"],
    color: "#512BD4",
  },
  {
    name: "FastAPI",
    category: "Framework",
    usage: ["Python APIs", "REST", "Async Backend"],
    projects: ["AI Systems"],
    color: "#009688",
  },
  {
    name: "Flutter",
    category: "Framework",
    usage: ["Cross-Platform Mobile", "UI Development"],
    projects: ["Mobile Applications"],
    color: "#02569B",
  },
  {
    name: "Kotlin",
    category: "Language",
    usage: ["Android", "Mobile", "JVM"],
    projects: ["Mobile Applications"],
    color: "#7F52FF",
  },
  {
    name: "SQL Server",
    category: "Database",
    usage: ["Relational DB", "Enterprise Data", "Stored Procedures"],
    projects: ["Property Marketplace", "Inventory Management"],
    color: "#CC2927",
  },
  {
    name: "MySQL",
    category: "Database",
    usage: ["Relational DB", "Web Applications"],
    projects: ["Various Projects"],
    color: "#4479A1",
  },
  {
    name: "Supabase",
    category: "Database",
    usage: ["PostgreSQL", "Auth", "Real-time", "Storage"],
    projects: ["Web Applications"],
    color: "#3ECF8E",
  },
  {
    name: "scikit-learn",
    category: "AI / ML",
    usage: ["Machine Learning", "Classification", "Regression"],
    projects: ["AI Job Recommender", "AI Interviewer"],
    color: "#F0952E",
  },
  {
    name: "Git",
    category: "Tool",
    usage: ["Version Control", "Collaboration"],
    projects: ["All Projects"],
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Platform",
    usage: ["Code Hosting", "CI/CD", "Collaboration"],
    projects: ["All Projects"],
    color: "#ffffff",
  },
  {
    name: "Entity Framework",
    category: "Tool",
    usage: ["ORM", "Database Access", "Migrations"],
    projects: ["Property Marketplace", "Inventory Management"],
    color: "#512BD4",
  },
  {
    name: "JavaScript",
    category: "Language",
    usage: ["Web Development", "Frontend", "Node.js"],
    projects: ["Web Applications"],
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Language",
    usage: ["Type-Safe JS", "Frontend", "Backend"],
    projects: ["Web Applications"],
    color: "#3178C6",
  },
  {
    name: "HTML/CSS",
    category: "Language",
    usage: ["Web Structure", "Styling", "Responsive Design"],
    projects: ["All Web Projects"],
    color: "#E34F26",
  },
  {
    name: "Java",
    category: "Language",
    usage: ["Backend", "Enterprise", "Android Legacy"],
    projects: ["Academic Projects"],
    color: "#ED8B00",
  },
];

export const engineeringDNA = [
  {
    id: "ai-ml",
    label: "AI / ML",
    description: "Building intelligent systems with machine learning, NLP, and data-driven decision making.",
    x: 0,
    y: 0,
  },
  {
    id: "backend",
    label: "Backend",
    description: "Server-side architecture, APIs, authentication, and business logic implementation.",
    x: 1,
    y: 0,
  },
  {
    id: "web",
    label: "Web",
    description: "Full-stack web development with modern frameworks and responsive design.",
    x: 2,
    y: 0,
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Cross-platform and native mobile applications with Flutter and Kotlin.",
    x: 0,
    y: 1,
  },
  {
    id: "databases",
    label: "Databases",
    description: "Data modeling, SQL, ORMs, and database design for scalable applications.",
    x: 1,
    y: 1,
  },
  {
    id: "apis",
    label: "APIs",
    description: "REST API design, integration, documentation, and endpoint architecture.",
    x: 2,
    y: 1,
  },
  {
    id: "networking",
    label: "Networking",
    description: "Network fundamentals, TCP/IP, protocols, and infrastructure understanding.",
    x: 0.5,
    y: 2,
  },
  {
    id: "cloud",
    label: "Cloud / Deploy",
    description: "Deployment, cloud services, CI/CD pipelines, and production infrastructure.",
    x: 1.5,
    y: 2,
  },
];

export const currentlyExploring = [
  "AI Engineering",
  "Machine Learning",
  "LLM Applications",
  "Recommendation Systems",
  "Backend Architecture",
  "System Design",
  "Cloud Deployment",
  "Data Engineering",
];
