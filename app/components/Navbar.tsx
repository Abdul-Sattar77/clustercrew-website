"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageCircle, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappNumber = "12269726927";
  const message = "Hi Cluster Crew! I want to discuss a new project.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? "py-4 px-4" : "py-8 px-0"
    }`}>
      <div className={`max-w-screen-2xl mx-auto px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled 
          ? "bg-black/95 backdrop-blur-2xl rounded-[24px] border border-white/10 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-0"
        }`}>
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="relative w-12 h-12 bg-[#facc15] rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.2)] overflow-hidden"
          >
            <div className="text-black font-black text-2xl italic">C</div>
          </motion.div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter leading-none uppercase transition-colors ${scrolled ? "text-white" : "text-slate-900"}`}>
              Cluster<span className="text-[#facc15]">Crew</span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 mt-1">Agency v2.0</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className="relative px-6 py-2 group">
                <span className={`relative z-10 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  isActive 
                  ? "text-[#facc15]" 
                  : scrolled ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-black"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div layoutId="navPill" className="absolute inset-0 bg-white/10 rounded-xl" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={whatsappLink} target="_blank" className="relative group">
            <div className={`p-3 rounded-xl border transition-all duration-300 ${
              scrolled ? "bg-white/5 border-white/10 text-[#facc15]" : "bg-slate-100 border-slate-200 text-slate-900"
            }`}>
              <MessageCircle size={20} />
            </div>
          </Link>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-[#facc15] text-black font-black rounded-xl text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-[#facc15]/10 hover:bg-white transition-all"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-3 rounded-xl transition-colors ${scrolled ? "bg-white/5 text-white" : "bg-slate-100 text-slate-900"}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-black z-[110] flex flex-col p-6 sm:p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8 sm:mb-12">
              <div className="text-[#facc15] font-black text-2xl uppercase tracking-tighter">ClusterCrew</div>
              <button onClick={() => setIsOpen(false)} className="p-4 bg-white/5 rounded-full text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="text-2xl sm:text-3xl font-black text-white hover:text-[#facc15] transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto border-t border-white/10 pt-10">
              <Link href={whatsappLink} className="flex items-center gap-4 text-[#facc15] font-bold text-xl">
                <MessageCircle size={28} /> Chat on WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}