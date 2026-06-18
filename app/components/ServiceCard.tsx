"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const serviceRoutes: Record<string, string> = {
  "AI Agents": "/services#ai-automation-agents",
  "Workflow Automation": "/services#ai-automation-agents",
  "Web Development": "/services#web-development",
  "Mobile Apps": "/services#app-development",
  "Desktop Apps": "/services#desktop-development",
  "SaaS Products": "/services#machine-learning",
  "Brand & UI/UX": "/services#graphic-design",
};

export function ServiceCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const href = pathname === "/services" ? "/contact" : (serviceRoutes[title] ?? "/services");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative p-8 rounded-3xl border border-slate-100/50 bg-white/80 hover:border-[#facc15]/40 hover:shadow-2xl hover:shadow-[#facc15]/10 backdrop-blur-sm transition-all duration-500 overflow-hidden cursor-default group"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-[#facc15]/10 to-transparent rounded-3xl"
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-3xl mb-5 inline-block"
      >
        {icon}
      </motion.div>

      <h3 className="text-slate-900 font-black text-xl mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed font-medium">{desc}</p>

      {/* ── Working "Learn more" link ── */}
      <Link href={href}>
        <motion.div
          animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.5 }}
          className="mt-5 text-[#facc15] text-xs font-black uppercase tracking-widest flex items-center gap-2 w-fit"
        >
          Learn more <span>→</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}