"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import { motion } from "framer-motion";

const teamMembers = [
  { 
    name: "Labish", 
    role: "CEO & Product Architect", 
    image: "/team/Labish.jpeg", 
    skills: ["Product Vision", "AI Automation", "Strategy"],
    linkedin: "https://www.linkedin.com/in/labish-roopani-09a0a6267/", // <-- Link Yahan Dalna Hai
    github: "https://github.com/labish112" 
  },
  { 
    name: "Adeel", 
    role: "Full Stack & App Lead", 
    image: "/team/Adeel.jpeg", 
    skills: ["React Native", "Web AI", "Agent Dev"],
    linkedin: "https://www.linkedin.com/in/mr-adeel-929035398",
    github: "https://github.com/adeel-hussain786"
  },
  { 
    name: "Babar Rahim", 
    role: "MERN Stack Engineer", 
    image: "/team/Babar Rahim.jpeg", 
    skills: ["MongoDB", "ML Deployments", "Architecture"],
    linkedin: "#",
    github: "#"
  },
  { 
    name: "Muhammad Arsalan", 
    role: "Mobile & DevOps Lead", 
    image: "/team/Arsallan.jpeg", 
    skills: ["Flutter", "Model Deployment", "Scaling"],
    linkedin: "https://www.linkedin.com/in/mohammad-arsalan-83631b2aa",
    github: "https://github.com/ArsalanTheCoder"
  },
  { 
    name: "Abdul Sattar", 
    role: "UI/UX & Frontend Lead", 
    image: "/team/Abdul Sattar.jpeg", 
    skills: ["Graphic Design", "UI/UX Strategy", "AI Integration"],
    linkedin: "https://www.linkedin.com/in/abdul-sattar-141602262?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/Abdul-Sattar77"
  },
];

export default function Team() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 pt-32 md:pt-44 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#facc15] font-black tracking-[0.3em] uppercase text-xs md:text-sm">Our DNA</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mt-4 text-[#0f172a]">
            The <span className="text-[#facc15]">Cluster</span> Crew
          </h1>
          <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto font-medium px-4">
            A specialized collective of engineers and designers building the next generation of AI.
          </p>
        </motion.div>

        {/* Responsive Grid: Mobile pe 1, Tablet pe 2, Laptop pe 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch"> 
          {teamMembers.map((member, i) => (
            <motion.div key={member.name} className="h-full"> 
               <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}