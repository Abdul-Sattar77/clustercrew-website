"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceProps {
  title: string;
  desc: string;
  image: string;
}

export default function ServiceCard({ title, desc, image }: ServiceProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group p-8 md:p-10 bg-white border border-gray-100 rounded-[35px] hover:shadow-[0_40px_80px_-15px_rgba(15,23,42,0.1)] transition-all duration-500 flex flex-col h-full relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#facc15]/5 blur-3xl rounded-full group-hover:bg-[#facc15]/15 transition-all duration-500" />

      {/* Image Container (Thumbnail) */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:border-[#facc15]/40 transition-all">
        <Image 
          src={image} 
          alt={title} 
          width={80} 
          height={80} 
          className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
          // If you don't have images yet, this will show a placeholder or handle the error
          onError={(e) => {
            (e.target as any).src = "https://via.placeholder.com/80?text=AI"; 
          }}
        />
      </div>

      <h3 className="text-2xl font-black text-[#0f172a] mb-4 tracking-tight group-hover:text-[#facc15] transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-8 flex-grow">
        {desc}
      </p>

      {/* Card Footer */}
      <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#0f172a] transition-colors">
          View Details
        </span>
        <div className="w-10 h-10 bg-[#0f172a] text-white rounded-full flex items-center justify-center group-hover:bg-[#facc15] group-hover:text-[#0f172a] transition-all duration-300 shadow-lg">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}