"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, Globe, Layout } from "lucide-react";
import Image from "next/image";

export default function ProjectModal({ project, isOpen, onClose }: any) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-[#facc15] rounded-full flex items-center justify-center transition-all group"
            >
              <X className="group-hover:text-[#0f172a] text-gray-500" />
            </button>

            {/* Left: Image Side */}
            <div className="md:w-1/2 relative h-[300px] md:h-auto bg-gray-100">
              <Image src={project.img} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                 <span className="bg-[#facc15] text-[#0f172a] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                 <h2 className="text-4xl font-black mt-4">{project.title}</h2>
              </div>
            </div>

            {/* Right: Info Side */}
            <div className="md:w-1/2 p-10 md:p-16">
              <h3 className="text-sm font-black text-[#facc15] uppercase tracking-[0.3em] mb-4">Project Overview</h3>
              <p className="text-xl text-gray-500 leading-relaxed mb-10">
                This project involved building a custom {project.category} engine tailored for high-scale enterprise operations. We focused on low latency and high accuracy.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-black text-[#0f172a] mb-4 flex items-center gap-2"> <Cpu size={18} /> Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Python", "FastAPI"].map(t => (
                      <span key={t} className="text-[10px] bg-gray-50 px-3 py-1 rounded-lg font-bold border border-gray-100 uppercase">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-[#0f172a] mb-4 flex items-center gap-2"> <Layout size={18} /> Results</h4>
                  <p className="text-sm text-gray-500 font-medium">+45% Efficiency Increase</p>
                </div>
              </div>

              <button className="w-full py-5 bg-[#0f172a] text-white font-black rounded-2xl hover:bg-[#facc15] hover:text-[#0f172a] transition-all flex items-center justify-center gap-3 shadow-xl">
                View Live Case Study <Globe size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}