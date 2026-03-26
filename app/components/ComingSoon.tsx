"use client";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center overflow-hidden p-8">
      {/* Background Animated Blobs */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute w-[500px] h-[500px] bg-[#facc15]/10 blur-[120px] rounded-full" />

      <div className="relative text-center z-10">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-10">
           <span className="px-6 py-2 bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Coming Soon</span>
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10">
          The Future is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] to-yellow-600">Loading...</span>
        </h1>

        <div className="flex justify-center gap-4">
          <div className="h-1 w-20 bg-[#facc15] rounded-full animate-pulse" />
          <div className="h-1 w-4 bg-gray-600 rounded-full" />
          <div className="h-1 w-4 bg-gray-600 rounded-full" />
        </div>
        
        <p className="mt-12 text-gray-500 font-bold tracking-widest uppercase text-sm">Cluster Crew | 2026</p>
      </div>
    </div>
  );
}