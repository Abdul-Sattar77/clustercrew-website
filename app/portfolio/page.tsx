"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "AI", "Data", "Web", "Design", "Engineering"];

const projects = [
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

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans relative">
      <Navbar />
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-32">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 sm:mb-6 text-[#0f172a]"
          >
            Selected Work
          </motion.h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
             An extensive portfolio showing expertise in AI development, Data Science, and Systems Engineering.
          </p>
          
          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  filter === cat 
                  ? "bg-[#0f172a] text-white shadow-2xl scale-105" 
                  : "bg-white text-gray-400 hover:text-[#0f172a] border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-50 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#0f172a] shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-8 md:p-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-black tracking-tight text-[#0f172a]">{project.title}</h3>
                    <div className="w-10 h-10 bg-[#facc15] rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                      <span className="font-bold text-lg">↗</span>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[50px] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#facc15] hover:text-[#0f172a] transition-all text-xl font-bold shadow-xl"
              >
                ✕
              </button>

              <div className="flex flex-col lg:flex-row min-h-full">
                {/* Modal Image Area */}
                <div className="lg:w-1/2 relative min-h-[400px]">
                  <Image 
                    src={selectedProject.img} 
                    alt={selectedProject.title} 
                    fill 
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                </div>
                
                {/* Modal Info Area */}
                <div className="lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-white">
                  <div className="inline-block bg-[#facc15] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0f172a] mb-6 w-fit">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0f172a] mb-4 sm:mb-8 tracking-tighter leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>
                  
                  {/* Contact Button */}
                  <a 
                    href="/contact" 
                    className="group flex items-center justify-center bg-[#0f172a] text-white px-10 py-6 rounded-3xl font-bold text-xl hover:bg-black transition-all shadow-2xl active:scale-95"
                  >
                    Contact for Project
                    <span className="ml-4 text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}