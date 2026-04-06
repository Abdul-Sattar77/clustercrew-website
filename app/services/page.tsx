"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const services = [
  { 
    id: "machine-learning",
    title: "Machine Learning", 
    image: "/images/s1.png", 
    desc: "Train custom models on your private data. From regression to complex neural networks, we build systems that learn and evolve." 
  },
  { 
    id: "nlp-chatbots",
    title: "NLP & Chatbots", 
    image: "/images/s4.png",
    desc: "Next-gen conversational AI using RAG (Retrieval-Augmented Generation) for pinpoint accuracy in customer support." 
  },
  { 
    id: "app-development",
    title: "App Development", 
    image: "/images/s-app.png", 
    desc: "High-performance iOS & Android apps integrated with AI agents, providing seamless user experiences with real-time intelligence." 
  },
  { 
    id: "computer-vision",
    title: "Computer Vision", 
    image: "/images/s3.png",
    desc: "Object detection, facial recognition, and automated quality inspection systems for industrial and security needs." 
  },
  { 
    id: "ai-automation-agents",
    title: "AI Automation Agents", 
    image: "/images/s2.png",
    desc: "Autonomous agents that can navigate browsers, manage emails, and handle complex multi-step workflows 24/7." 
  },
  { 
    id: "web-development",
    title: "Web Development", 
    image: "/images/s_web.png",
    desc: "Ultra-fast Next.js applications with Framer Motion animations and high-conversion UI/UX design." 
  },
  { 
    id: "graphic-design",
    title: "Graphic Design", 
    image: "/images/s_gr.png",
    desc: "Premium branding kits, cinematic 3D renders, and social media assets that make your brand stand out." 
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#fcfcfd] text-[#0f172a] min-h-screen">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 pt-32 md:pt-44 pb-32">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#facc15]/10 border border-[#facc15]/20 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-[#facc15]" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#facc15]">Capabilities</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-none"
          >
            Our <span className="text-gray-300 italic px-2">Core</span> <br /> Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-500 mt-6 md:mt-8 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between complex AI research and practical, high-impact business applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              id={service.id}           // ← yeh scroll anchor hai
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="scroll-mt-32"  // ← fixed navbar ke liye offset
            >
              <ServiceCard title={service.title} desc={service.desc} image={service.image} />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}