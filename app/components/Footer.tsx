"use client";

import { Mail, MapPin, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Build-safe Manual SVG Icons
const SocialIcons = {
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5-.73 1.02-1.1 2.24-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
  )
};

const socialLinks = {
  twitter: "https://twitter.com/ClusterCrew5",
  github: "https://github.com/ClusterCrew-agency",
  linkedin: "https://www.linkedin.com/in/cluster-crew-10a016401/"
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const expertiseLinks = [
  { name: "AI Agents", href: "/services#ai-automation-agents" },
  { name: "Frontend Engineering", href: "/services#web-development" },
  { name: "UI/UX Design", href: "/services#graphic-design" },
  { name: "Cloud Architecture", href: "/services#machine-learning" },
  { name: "Mobile Dev", href: "/services#app-development" },
];
const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Refund Policy", href: "/refunds" },
];

export default function Footer() {
  const whatsappNumber = "12269726927";
  const message = "Hi Cluster Crew! I want to discuss a new project.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const emailLink = "mailto:clustercrew5@gmail.com";

  return (
    <footer className="relative bg-[#050505] text-white pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-12 overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#facc15]/5 blur-[150px] -z-0 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#facc15]/3 blur-[120px] -z-0 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* ── CTA Banner ── */}
        <div className="mb-16 rounded-[24px] bg-[#facc15] p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.03)_20px,rgba(0,0,0,0.03)_40px)]" />
          <div className="relative">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/50 mb-2">Ready to build?</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tighter leading-none">
              Let's ship something<br />extraordinary.
            </h3>
          </div>
          <div className="relative flex gap-3 flex-col xs:flex-row flex-wrap w-full md:w-auto">
            <Link href={whatsappLink} target="_blank"
              className="inline-flex items-center gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-black text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl active:scale-95">
              <MessageCircle size={18} /> WhatsApp
            </Link>
            <Link href={emailLink}
              className="inline-flex items-center gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-black/10 text-black border-2 border-black/20 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 active:scale-95">
              <Mail size={18} /> Email Us
            </Link>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-24 mb-16 sm:mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-4 group w-fit">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="w-14 h-14 bg-[#facc15] rounded-2xl flex items-center justify-center text-black font-black text-3xl shadow-[0_0_40px_rgba(250,204,21,0.15)]"
                >
                  C
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-[1000] tracking-tighter uppercase text-white">
                  Cluster<span className="text-[#facc15]">Crew</span>
                </h2>
              </Link>
              <p className="text-base text-gray-500 max-w-xs leading-relaxed font-medium">
                Pushing the limits with <span className="text-white font-bold">autonomous AI</span> and high-performance engineering.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300">
                <SocialIcons.Twitter />
              </Link>
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300">
                <SocialIcons.Github />
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300">
                <SocialIcons.Linkedin />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-2">
              <Link href={emailLink} className="flex items-center gap-3 text-gray-500 hover:text-[#facc15] transition-colors group">
                <Mail size={16} className="text-[#facc15] shrink-0" />
                <span className="font-bold text-sm">clustercrew5@gmail.com</span>
              </Link>
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin size={16} className="text-[#facc15] mt-0.5 shrink-0" />
                <p className="font-bold text-sm leading-snug">
                  Kitchener Ontario Canada
                </p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            
            {/* Navigation */}
            <div className="space-y-8">
              <h4 className="text-[#facc15] font-black text-[10px] uppercase tracking-[0.4em]">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}
                      className="text-gray-500 font-bold text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                      {item.name}
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="space-y-8">
              <h4 className="text-[#facc15] font-black text-[10px] uppercase tracking-[0.4em]">Expertise</h4>
              <ul className="space-y-4">
                {expertiseLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}
                      className="text-gray-500 font-bold text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                      {item.name}
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="col-span-2 md:col-span-1 space-y-8">
              <h4 className="text-[#facc15] font-black text-[10px] uppercase tracking-[0.4em]">Quick Chat</h4>
              <Link href={whatsappLink} target="_blank"
                className="block p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <span className="font-black text-white text-sm">WhatsApp</span>
                </div>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">
                  Chat directly with the crew. Fast replies, real humans.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#25D366] text-[10px] font-black uppercase tracking-widest">
                  Start Chat <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>

              {/* Agency badge */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.4em]">
            © 2026 ClusterCrew Studio — All rights reserved
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            {legalLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}