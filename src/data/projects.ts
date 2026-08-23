export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "Prototype" | "MVP" | "Academic Project" | "Personal Project" | "Experimental";
  featured: boolean;
  problem: string;
  idea: string;
  architecture: string[];
  challenges: string[];
  solution: string;
  result: string;
  learned: string;
  future: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "ai-job-recommender",
    title: "AI Job Recommender",
    subtitle: "Intelligent Job Matching with ML",
    category: "AI / Machine Learning",
    description:
      "An AI-powered job recommendation system exploring how machine learning and text similarity can make job discovery more intelligent.",
    longDescription:
      "A machine learning pipeline that matches candidates to jobs using natural language processing, TF-IDF vectorization, cosine similarity scoring, and logistic regression classification. The system analyzes user profiles, skills, education, experience, and location against job requirements to generate personalized recommendations.",
    technologies: ["Python", "pandas", "scikit-learn", "TF-IDF", "Cosine Similarity", "Logistic Regression"],
    status: "Academic Project",
    featured: true,
    problem:
      "Traditional job searching relies on keyword matching, which misses semantic relationships between skills and roles. A developer with 'React' experience might be a great fit for a 'Frontend Engineer' role even if the posting doesn't mention React directly.",
    idea:
      "Build a machine learning system that understands the relationship between candidate profiles and job requirements using natural language processing, going beyond simple keyword matching.",
    architecture: [
      "User Profile Input",
      "Job Data Collection",
      "Text Preprocessing",
      "TF-IDF Vectorization",
      "Cosine Similarity Scoring",
      "Logistic Regression Classification",
      "Ranked Job Recommendations",
    ],
    challenges: [
      "Handling sparse data when skills don't directly match job requirements",
      "Balancing multiple factors: skills, education, experience, and location",
      "Building a meaningful training dataset from available job and profile data",
      "Ensuring the model generalizes beyond the training set",
    ],
    solution:
      "Implemented a multi-stage pipeline that first uses TF-IDF and cosine similarity for text-based matching, then applies logistic regression to learn patterns from labeled data. Combined weighted scoring across multiple profile dimensions.",
    result:
      "A working recommendation prototype that demonstrates how ML can improve job discovery beyond keyword matching. The system produces ranked job suggestions based on holistic profile analysis.",
    learned:
      "Gained deep understanding of text preprocessing, feature engineering for NLP, model evaluation techniques, and the practical challenges of building ML systems with real-world data.",
    future:
      "Expand to deep learning embeddings (BERT/sentence-transformers), add collaborative filtering, build a real-time API, and create a web interface for live recommendations.",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    icon: "🧠",
  },
  {
    id: "ai-interviewer",
    title: "AI Interviewer",
    subtitle: "Intelligent Interview Evaluation",
    category: "Artificial Intelligence",
    description:
      "An experimental AI system exploring intelligent interviewing, answer evaluation, and structured scoring.",
    longDescription:
      "An AI-powered system that generates interview questions, evaluates candidate answers, and provides structured feedback with quality scores. The project explores how AI can assist in the interview process through automated question generation and answer assessment.",
    technologies: ["Python", "NLP", "Machine Learning", "Data Processing", "Scoring Algorithms"],
    status: "Experimental",
    featured: true,
    problem:
      "Interview preparation is often unstructured. Candidates don't get consistent, objective feedback on their answers, and interviewers spend significant time on repetitive evaluation tasks.",
    idea:
      "Create an AI system that can generate relevant interview questions, evaluate answer quality, and provide structured scoring and feedback — making interview preparation more systematic.",
    architecture: [
      "Question Dataset",
      "Answer Processing",
      "Quality Analysis",
      "Scoring Engine",
      "Feedback Generation",
    ],
    challenges: [
      "Defining meaningful quality metrics for open-ended interview answers",
      "Handling the nuance of technical vs behavioral interview responses",
      "Building evaluation models without extensive labeled training data",
    ],
    solution:
      "Developed a scoring pipeline that analyzes answer completeness, relevance, technical accuracy, and communication clarity. Used structured datasets for training and validation.",
    result:
      "A working prototype that demonstrates AI-assisted interview evaluation with automated scoring and feedback generation.",
    learned:
      "Explored NLP for answer quality assessment, learned about evaluation metric design, and gained experience building interactive AI systems.",
    future:
      "Integrate with LLMs for more natural question generation, add domain-specific interview tracks, and build a web-based practice platform.",
    gradient: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
    icon: "💬",
  },
  {
    id: "property-marketplace",
    title: "Property Marketplace",
    subtitle: "Full-Stack Business Software",
    category: "Full-Stack / Business Software",
    description:
      "A property marketplace designed around real-world listing management, organization workflows, verification, and user interaction.",
    longDescription:
      "A comprehensive property marketplace platform built with enterprise-grade architecture. Features include multi-role authentication, organization management, property listings with media, verification workflows, favorites, and location-based search.",
    technologies: ["ASP.NET Core", ".NET", "SQL Server", "Entity Framework Core", "Authentication", "PWA"],
    status: "MVP",
    featured: true,
    problem:
      "Property listing platforms often lack proper verification workflows, organization management, and the business logic needed for agencies to operate professionally online.",
    idea:
      "Build a property marketplace that handles the complete business workflow: agency registration, organization creation, profile completion, verification, listing management, and user interaction.",
    architecture: [
      "ASP.NET Core Backend",
      "SQL Server Database",
      "Entity Framework Core ORM",
      "Role-Based Authentication",
      "Organization Management",
      "Verification Workflow",
      "Property CRUD & Media",
      "PWA Frontend",
    ],
    challenges: [
      "Designing a multi-step verification workflow with admin review",
      "Managing complex relationships between users, organizations, and properties",
      "Building role-based access control across the entire application",
      "Handling property media uploads and management",
    ],
    solution:
      "Implemented a clean architecture with separation of concerns. Used Entity Framework Core for data access, built custom middleware for authorization, and designed a state-machine approach for the verification workflow.",
    result:
      "A functional marketplace platform demonstrating understanding of software architecture, business logic, user workflows, and enterprise patterns.",
    learned:
      "Gained deep experience in full-stack .NET development, database design, business workflow implementation, authentication systems, and production-quality code architecture.",
    future:
      "Add payment integration, real-time notifications, advanced search with Elasticsearch, mobile app companion, and analytics dashboard.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    icon: "🏠",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    subtitle: "Business Operations Software",
    category: "Business Software",
    description:
      "A business-oriented inventory system designed to simplify product and stock management through structured software workflows.",
    longDescription:
      "A complete inventory management solution featuring product CRUD, category management, stock tracking, user authentication, role-based access, and reporting. Built to demonstrate practical business software development.",
    technologies: ["ASP.NET Core", ".NET", "SQL Server", "Entity Framework Core", "Authentication"],
    status: "MVP",
    featured: true,
    problem:
      "Small businesses struggle with manual inventory tracking, leading to stock discrepancies, lost revenue, and inefficient operations.",
    idea:
      "Create a structured inventory management system that provides clear product visibility, stock management, and role-based access for different team members.",
    architecture: [
      "ASP.NET Core MVC/API",
      "SQL Server Database",
      "Entity Framework Core",
      "Role-Based Auth",
      "Product Management",
      "Category System",
      "Stock Operations",
    ],
    challenges: [
      "Designing an efficient database schema for inventory operations",
      "Implementing proper role-based access control",
      "Building a clean, maintainable codebase following best practices",
    ],
    solution:
      "Applied clean architecture principles, used repository pattern with EF Core, and implemented comprehensive role-based authorization throughout the application.",
    result:
      "A complete business software solution demonstrating database design, CRUD operations, authentication, and role-based access control.",
    learned:
      "Strengthened skills in .NET enterprise development, database modeling, business logic implementation, and software architecture patterns.",
    future:
      "Add barcode scanning, import/export functionality, multi-warehouse support, audit logging, and dashboard analytics.",
    gradient: "from-emerald-500/20 via-green-500/20 to-cyan-500/20",
    icon: "📦",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    subtitle: "Cross-Platform & Native Development",
    category: "Mobile Development",
    description:
      "A collection of mobile applications exploring cross-platform and native development with Flutter, Kotlin, and Android.",
    longDescription:
      "Various mobile application projects exploring different development approaches and use cases — from food delivery concepts to quiz apps, ATM interfaces, and file sharing utilities. Demonstrates versatility across mobile platforms.",
    technologies: ["Flutter", "Kotlin", "Android", "Dart", "Firebase"],
    status: "Personal Project",
    featured: false,
    problem:
      "Mobile applications serve different user needs across platforms, and building for both cross-platform and native environments requires different technical approaches.",
    idea:
      "Explore mobile development across multiple frameworks and platforms to understand the trade-offs between cross-platform and native approaches.",
    architecture: [
      "Flutter Cross-Platform",
      "Kotlin Android Native",
      "Firebase Backend",
      "REST API Integration",
      "Local Storage",
      "UI/UX Design",
    ],
    challenges: [
      "Understanding platform-specific behaviors between Flutter and native Android",
      "Designing intuitive mobile interfaces for different use cases",
      "Managing state and data flow across different frameworks",
    ],
    solution:
      "Built multiple focused applications, each targeting a specific use case. Used Flutter for cross-platform reach and Kotlin for native Android features.",
    result:
      "A portfolio of mobile projects demonstrating ability to work across platforms and adapt to different development environments.",
    learned:
      "Gained practical experience with Flutter, Kotlin, Android development, and cross-platform development patterns.",
    future:
      "Build a production-quality cross-platform app, explore Jetpack Compose, add offline-first architecture, and publish to app stores.",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    icon: "📱",
  },
];
