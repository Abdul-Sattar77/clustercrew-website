"use client";

import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────
   ANIMATED 3D SPHERE (Smaller version)
────────────────────────────── */
function AnimatedSphere() {
  return (
    <div className="relative w-[280px] h-[280px] flex items-center justify-center select-none pointer-events-none">
      {/* Outer glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[#facc15]/15 blur-[50px]"
      />
      {/* Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-[#facc15]/40"
      />
      {/* Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute w-[220px] h-[220px] rounded-full border border-[#0f172a]/10"
      />
      
    </div>
  );
}

/* ──────────────────────────────
   SCROLL PROGRESS BAR
────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[200] bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#facc15]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/* ──────────────────────────────
   CURSOR GLOW
────────────────────────────── */
function CursorFollower() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 });
  const sy = useSpring(my, { stiffness: 80, damping: 15 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      className="fixed pointer-events-none z-40 w-[400px] h-[400px] rounded-full"
      style={{
        x: sx, y: sy,
        translateX: "-50%", translateY: "-50%",
        background: "radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)",
      }}
    />
  );
}

/* ──────────────────────────────
   MAGNETIC BUTTON (Enhanced)
────────────────────────────── */
function MagBtn({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "outline" }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  }, [x, y]);

  const onLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  const base = "relative overflow-hidden px-5 py-3 sm:px-8 sm:py-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl active:scale-[0.98]";
  
  const styles = variant === "primary"
    ? `${base} text-slate-900 bg-gradient-to-r from-[#facc15]/95 to-[#f59e0b]/95 hover:from-[#facc15] hover:to-[#f59e0b] border border-white/50 backdrop-blur-sm`
    : `${base} text-slate-900 bg-white/80 hover:bg-white border-2 border-slate-200/50 backdrop-blur-sm hover:border-[#facc15]/50`;

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      <Link href={href}>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles}>
          <motion.span
            initial={{ x: "-100%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white/30 w-1/3 h-full pointer-events-none"
            style={{ skewX: -15 }}
          />
          {children}
        </motion.button>
      </Link>
    </motion.div>
  );
}

/* ──────────────────────────────
   STAT CARD
────────────────────────────── */
function StatCard({ val, label, desc, i }: { val: string; label: string; desc: string; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative p-8 rounded-3xl border border-slate-100/50 bg-white/80 hover:border-[#facc15]/50 hover:shadow-2xl hover:shadow-[#facc15]/20 backdrop-blur-sm transition-all duration-500 overflow-hidden cursor-default group"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-[#facc15]/10 to-transparent rounded-3xl" 
          />
        )}
      </AnimatePresence>
      <motion.p
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-2"
      >
        {val}
      </motion.p>
      <p className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.4em] mb-2">{label}</p>
      <p className="text-slate-600 text-base font-medium">{desc}</p>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#facc15] to-transparent rounded-full"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

/* ──────────────────────────────
   SERVICE CARD
────────────────────────────── */
function ServiceCard({ icon, title, desc, delay }: { icon: string; title: string; desc: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
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
      <motion.div
        animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.5 }}
        className="mt-5 text-[#facc15] text-xs font-black uppercase tracking-widest flex items-center gap-2"
      >
        Learn more <span>→</span>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────
   MAIN HOME PAGE
────────────────────────────── */
export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -60]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <div className="text-slate-900 min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <CursorFollower />
      <ScrollProgress />
      <Navbar />

      {/* ═══ NEW HERO SECTION (Stripe/Linear Style) ═══ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden">

        {/* Enhanced Background FX */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Stripe-style subtle grid */}
          <div className="absolute inset-0 opacity-2"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(250,204,21,0.1) 1px, transparent 0),
                radial-gradient(circle at 1px 1px, rgba(15,23,42,0.02) 1px, transparent 0)
              `,
              backgroundSize: "80px 80px, 40px 40px"
            }}
          />
          {/* Floating particles */}
          <div className="absolute top-1/4 -right-20 w-40 h-40 rounded-full bg-[#facc15]/5 blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 -left-16 w-32 h-32 rounded-full bg-slate-200/30 blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">

            {/* ═══ LEFT: Content ═══ */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pr-12 space-y-8"
            >
              {/* NEW Badge - Linear style */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#facc15]/90 to-[#f59e0b]/90 text-slate-900 text-sm font-bold tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/50"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg" />
                <span>AI-First Development Studio</span>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              </motion.div>

              {/* Staggered Headline - Stripe style */}
              <div className="space-y-4">
                {["Ship faster", "with  AI"].map((word, i) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + i * 0.1,
                      ease: [0.34, 0.16, 0.2, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <h1 className={`font-black tracking-[-0.02em] leading-none ${i === 1 ? 'text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-[#facc15]' : 'text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-slate-900'}`}>
                      {word}
                    </h1>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-base md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-lg font-medium"
              >
                We build autonomous AI agents and full-stack SaaS platforms that scale to millions. 
                <span className="font-black text-slate-900">500+</span> companies trust us to ship faster.
              </motion.p>

              {/* Magnetic buttons - Linear style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagBtn href="/services" variant="primary">
                  Start Building
                </MagBtn>
                <MagBtn href="/portfolio" variant="outline">
                  See Our Work
                </MagBtn>
              </motion.div>

              {/* Trust indicators - Stripe style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-8 pt-8 border-t border-slate-200"
              >
                <div className="flex -space-x-3">
                  {["#facc15", "#667eea", "#f093fb", "#f5576c"].map((c, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900/10 to-transparent shadow-xl flex items-center justify-center text-sm font-black text-slate-900 border border-slate-200/50"
                      style={{ backgroundColor: c }}
                    >
                      {["F", "A", "Z", "M"][i]}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                        className="text-[#facc15] text-lg"
                      >
                        ★
                      </motion.span>
                    ))}
                    <span className="text-slate-600 font-bold ml-2">4.9 (247)</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Trusted by Stripe, Linear, and 500+ others
                  </p>
                                  </div>
              </motion.div>
            </motion.div>

            {/* ═══ RIGHT: Visuals (Robot + Enhanced Sphere) ═══ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-end items-center lg:pl-16"
            >
              {/* Robot Image */}
              <motion.div
                animate={{ 
                  y: [0, -200, 0], 
                  rotate: [0, 2, -1, 1, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-20 w-[220px] h-[290px] sm:w-[270px] sm:h-[360px] md:w-[320px] md:h-[420px] mx-auto lg:mr-0"
              >
                <Image
                  src="/images/hero.png"
                  alt="AI Robot"
                  width={320}
                  height={420}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
                {/* Robot glow */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl bg-[#facc15]/20 blur-xl -z-10"
                />
              </motion.div>

              {/* Enhanced Sphere - Smaller + Complementary */}
              
            </motion.div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-2xl bg-gradient-to-b from-slate-900/20 to-transparent border border-slate-200/50 flex items-start justify-center pt-2.5 shadow-xl"
          >
            <motion.div
              animate={{ height: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-gradient-to-t from-[#facc15] to-transparent rounded-full origin-bottom"
            />
          </motion.div>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-black">Scroll</span>
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-slate-50/60">
        {/* Ghosted bg text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[18vw] font-black tracking-tighter text-slate-900/[0.03] select-none">IMPACT</span>
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <p className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.5em] mb-3">Our impact</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">
              Numbers that{" "}
              <span className="italic" style={{ WebkitTextStroke: "2px rgba(250,204,21,0.7)", color: "transparent" }}>matter</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { val: "500+", label: "AI Deployments", desc: "Custom models shipped globally" },
              { val: "92%",  label: "Automation Rate", desc: "Average task efficiency gain"  },
              { val: "100%", label: "Client Success",  desc: "Satisfaction & retention rate"  },
            ].map((s, i) => <StatCard key={i} {...s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl text-center mx-auto"
          >
            <p className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.5em] mb-3">What we do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-5">
              Services built for{" "}
              <span className="italic" style={{ WebkitTextStroke: "2px rgba(250,204,21,0.7)", color: "transparent" }}>scale</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              From automation to full-stack development — we build the systems modern businesses run on.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🤖", title: "AI Agents",           desc: "Autonomous agents that handle complex workflows end-to-end without human intervention.", delay: 0    },
              { icon: "⚡", title: "Workflow Automation", desc: "Eliminate repetitive tasks with intelligent automation pipelines that run 24/7.",           delay: 0.1  },
              { icon: "🌐", title: "Web Development",     desc: "High-performance web platforms built with modern stacks, optimized for growth.",            delay: 0.2  },
              { icon: "📱", title: "Mobile Apps",         desc: "Native & cross-platform mobile apps that users love and businesses rely on.",               delay: 0.3  },
              { icon: "📊", title: "SaaS Products",       desc: "From MVP to enterprise — we architect scalable SaaS systems that grow with you.",           delay: 0.4  },
              { icon: "🎨", title: "Brand & UI/UX",       desc: "Craft digital experiences that elevate your brand and convert visitors into customers.",    delay: 0.5  },
            ].map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-slate-50/60">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(250,204,21,0.1) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.5em] mb-6">Ready to scale?</p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
              Let's build something <br />
              <span className="italic" style={{ WebkitTextStroke: "2px rgba(250,204,21,0.7)", color: "transparent" }}>extraordinary.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed mb-12 font-medium">
              Join 500+ companies that trust ClusterCrew to power their AI-first operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagBtn href="/contact" variant="primary">Start a Project</MagBtn>
              <MagBtn href="/services" variant="outline">Explore Services</MagBtn>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}