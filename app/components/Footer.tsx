"use client";

import { Mail, MapPin, ArrowUpRight, MessageCircle, Phone, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Build-safe Manual SVG Icons
const SocialIcons = {
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5-.73 1.02-1.1 2.24-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
  )
};

export default function Footer() {
  const whatsappNumber = "923190453945";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const footerLinks = {
    expertise: ["AI Agents", "Frontend Eng", "UI/UX Design", "Cloud Architecture", "Mobile Dev"],
    company: ["Our Projects", "The Crew", "Career", "Blog", "Contact Us"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"]
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#facc15]/5 blur-[150px] -z-0 rounded-full translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-[#facc15] rounded-2xl flex items-center justify-center text-black font-black text-3xl shadow-[0_0_40px_rgba(250,204,21,0.15)] group-hover:rotate-12 transition-transform duration-500">
                  C
                </div>
                <h2 className="text-4xl font-[1000] tracking-tighter uppercase text-white">Cluster<span className="text-[#facc15]">Crew</span></h2>
              </Link>
              <p className="text-2xl text-gray-500 max-w-md leading-relaxed font-medium">
                Pushing the boundaries of what's possible with <span className="text-white">autonomous AI</span> and high-performance engineering.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-3">
                <Link href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300">
                  <SocialIcons.Twitter />
                </Link>
                <Link href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300">
                  <SocialIcons.Github />
                </Link>
                <Link href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300">
                  <SocialIcons.Linkedin />
                </Link>
              </div>
              <Link href={whatsappLink} target="_blank" className="inline-flex items-center gap-4 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_15px_30px_rgba(37,211,102,0.3)] transition-all active:scale-95 w-fit">
                <MessageCircle size={20} /> Chat with the crew
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-10">
              <h4 className="text-[#facc15] font-black text-xs uppercase tracking-[0.4em]">Expertise</h4>
              <ul className="space-y-5">
                {footerLinks.expertise.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 font-bold hover:text-white transition-colors flex items-center gap-2 group">
                      {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[#facc15] font-black text-xs uppercase tracking-[0.4em]">Studio</h4>
              <ul className="space-y-5">
                {footerLinks.company.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 font-bold hover:text-white transition-colors flex items-center gap-2 group">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-10">
              <h4 className="text-[#facc15] font-black text-xs uppercase tracking-[0.4em]">Global Base</h4>
              <div className="space-y-8">
                <div className="group cursor-default">
                  <p className="text-white font-black text-xl tracking-tight mb-1 group-hover:text-[#facc15] transition-colors">hello@clustercrew.ai</p>
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Inquiries Only</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-500">
                    <MapPin size={18} className="text-[#facc15] mt-1 shrink-0" />
                    <p className="font-bold leading-tight">Mirpur Khas, Sindh<br />Pakistan — 69000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.4em]">© 2026 ClusterCrew Studio</p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            {footerLinks.legal.map((item) => (
              <Link key={item} href="#" className="hover:text-white transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}