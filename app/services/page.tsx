"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const services = [
  { id: "machine-learning",     icon: "🧠", title: "Machine Learning",     delay: 0.1, desc: "Train custom models on your private data. From regression to complex neural networks, we build systems that learn and evolve." },
  { id: "nlp-chatbots",         icon: "💬", title: "NLP & Chatbots",        delay: 0.2, desc: "Next-gen conversational AI using RAG (Retrieval-Augmented Generation) for pinpoint accuracy in customer support." },
  { id: "app-development",      icon: "📱", title: "Mobile Apps",           delay: 0.3, desc: "High-performance iOS & Android apps integrated with AI agents, providing seamless user experiences with real-time intelligence." },
  { id: "computer-vision",      icon: "👁️", title: "Computer Vision",       delay: 0.4, desc: "Object detection, facial recognition, and automated quality inspection systems for industrial and security needs." },
  { id: "ai-automation-agents", icon: "🤖", title: "AI Agents",             delay: 0.5, desc: "Autonomous agents that can navigate browsers, manage emails, and handle complex multi-step workflows 24/7." },
  { id: "web-development",      icon: "🌐", title: "Web Development",       delay: 0.6, desc: "Ultra-fast Next.js applications with Framer Motion animations and high-conversion UI/UX design." },
  { id: "graphic-design",       icon: "🎨", title: "Brand & UI/UX",         delay: 0.7, desc: "Premium branding kits, cinematic 3D renders, and social media assets that make your brand stand out." },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#fcfcfd] text-[#0f172a] min-h-screen">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-24 md:pb-32">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#facc15]/10 border border-[#facc15]/20 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-[#facc15]" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#facc15]">
              Capabilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-none"
          >
            Our <span className="text-gray-300 italic px-2">Core</span> <br /> Solutions
          </motion.h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-6 md:mt-8 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between complex AI research and practical, high-impact business applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                delay={service.delay}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}