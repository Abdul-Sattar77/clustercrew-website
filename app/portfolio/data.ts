export type ProjectCategory = "AI" | "Data" | "Web" | "Design" | "Engineering";

export interface Project {
  title: string;
  category: ProjectCategory;
  img: string;
  description: string;
}

export const categories: string[] = ["All", "AI", "Data", "Web", "Design", "Engineering"];

export const projects: Project[] = [
  {
    title: "HireGenie",
    category: "AI",
    img: "/images/hiregenie.png",
    description: "An AI-powered mobile application designed to automate the process of job hunting. It matches job descriptions with user resumes, optimizes professional summaries and experience bullets, generates tailored cover letters, and tracks applications on an interactive Kanban board."
  },
  {
    title: "Aura",
    category: "Web",
    img: "/images/aura.png",
    description: "A premium minimalist mood journaling mobile application. It features real-time emotional state logging, daily mood entry diaries, interactive insights timelines, and beautiful statistical emotional breakdowns."
  },
  { 
    title: "AI B2B Sales Agent", 
    category: "AI", 
    img: "/images/agent.jpg", 
    description: "An automated AI agent designed to engage prospects, handle objections, and qualify leads for sales teams 24/7. It uses advanced NLP to understand intent and drive conversions." 
  },
  { 
    title: "Technical Reporting & Documentation", 
    category: "Design", 
    img: "/images/report.jpeg", 
    description: "Expertise in creating detailed technical project reports, feasibility studies, and academic documentation following IEEE/Harvard Standards for professional clarity." 
  },
  { 
    title: "Artist Portfolio & Store", 
    category: "Web", 
    img: "/images/artist.jpeg", 
    description: "A premium digital gallery and e-commerce store for artists to showcase and sell masterpieces with a seamless, high-performance UI and secure checkout." 
  },
  { 
    title: "Biometric Face Recognition", 
    category: "AI", 
    img: "/images/fc.png", 
    description: "High-precision face recognition system using PCA and Tuned SVM/Logistic Regression on the Olivetti dataset, achieving 99% Accuracy." 
  },
  { 
    title: "GNI Finance Forecasting", 
    category: "Data", 
    img: "/images/GNI.jpeg",
    description: "Advanced time-series forecasting of GNI trends using ARIMA statistical models, providing data-driven insights based on World Bank historical data." 
  },
  { 
    title: "E-Commerce Insights Engine", 
    category: "Data", 
    img: "/images/ec.jpeg",
    description: "Relational data analysis using VLOOKUP & Pivot tables to derive critical business KPIs, sales performance, and growth trends." 
  },
  { 
    title: "Traffic Violation AI", 
    category: "AI", 
    img: "/images/td.jpeg", 
    description: "Computer Vision system for automated detection of traffic breaches, license plate recognition, and automated fine generation logic." 
  },
  { 
    title: "Circuit Simulation Lab", 
    category: "Engineering", 
    img: "/images/e.jpeg", 
    description: "Professional verification of KVL and KCL using Tinkercad simulations, bridging the gap between theoretical physics and practical hardware." 
  },
  { 
    title: "Cluster Crew Startup UI", 
    category: "Design", 
    img: "/images/cc.jpeg", 
    description: "UI/UX & Frontend Lead for a tech agency, responsible for defining the visual identity, branding, and high-fidelity product interfaces." 
  },
  { 
    title: "Automated Marksheet System", 
    category: "Web", 
    img: "/images/m.jpeg", 
    description: "C-language based academic analytics system designed for automated grading, GPA calculation, and student performance tracking." 
  },
  { 
    title: "Infrastructure Workstation Study", 
    category: "Engineering", 
    img: "/images/inf.jpeg", 
    description: "In-depth hardware optimization study comparing high-end workstations vs PCs for specialized OS environments and heavy computational tasks." 
  },
  { 
    title: "Library Management Database", 
    category: "Web", 
    img: "/images/lm.jpeg", 
    description: "A robust SQL-based relational database for large-scale inventory management, real-time book tracking, and user record systems." 
  }
];
