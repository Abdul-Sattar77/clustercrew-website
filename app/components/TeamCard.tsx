"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SocialIcons = {
  Linkedin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5-.73 1.02-1.1 2.24-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  )
};

export default function TeamCard({ 
  name, role, image, skills, linkedin, github 
}: { 
  name: string; role: string; image: string; skills: string[]; linkedin?: string; github?: string; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="flex flex-col h-full bg-white border border-gray-100 rounded-[35px] overflow-hidden group transition-all duration-500 shadow-sm hover:shadow-2xl relative"
    >
      {/* Background Hover Glow */}
      <div className="absolute -inset-2 bg-[#facc15]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />

      <div className="relative aspect-square overflow-hidden bg-gray-50 z-10">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" 
        />
        {/* Floating Socials (Now Clickable) */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 backdrop-blur-md rounded-xl text-[#0f172a] hover:bg-[#facc15] transition-all cursor-pointer shadow-md">
            <SocialIcons.Linkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 backdrop-blur-md rounded-xl text-[#0f172a] hover:bg-[#facc15] transition-all cursor-pointer shadow-md">
            <SocialIcons.Github />
          </a>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow z-10">
        <div className="mb-4">
          <h3 className="text-lg font-black text-[#0f172a] group-hover:text-[#facc15] transition-colors">{name}</h3>
          <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest mt-1">{role}</p>
        </div>
        
        <div className="mt-auto pt-6 border-t border-gray-50 flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill) => ( // Mobile pe zyada skills issue na karen isliye slice(0,3)
            <span key={skill} className="text-[8px] font-black bg-gray-50 text-gray-400 border border-gray-100 px-2 py-1 rounded-full uppercase transition-all group-hover:bg-[#0f172a] group-hover:text-white">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}