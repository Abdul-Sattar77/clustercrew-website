"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone, ChevronDown, MessageCircle, CheckCircle, Loader2 } from "lucide-react";

const WHATSAPP_NUMBER = "12269726927";
const REAL_EMAIL = "clustercrew5@gmail.com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "default", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || form.service === "default" || !form.message) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen relative overflow-x-hidden selection:bg-[#facc15]">
      <Navbar />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#facc15]/5 rounded-full blur-[120px] -z-10" />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-36 md:pt-44 pb-16 sm:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start lg:items-center">

          {/* ── LEFT ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-5 sm:mb-8 text-[#0f172a]">
              Let's <br /> <span className="text-[#facc15]">Talk.</span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-12 max-w-md">
              Have a project in mind? Fill the form and we'll receive it instantly — no extra steps.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${REAL_EMAIL}`} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#facc15] group-hover:scale-110 transition-transform border border-gray-50">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</p>
                  <p className="font-bold text-base sm:text-lg md:text-xl text-[#0f172a] group-hover:text-[#facc15] transition-colors">{REAL_EMAIL}</p>
                </div>
              </a>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform border border-gray-50">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">WhatsApp / Call</p>
                  <p className="font-bold text-base sm:text-lg md:text-xl text-[#0f172a] group-hover:text-[#25D366] transition-colors">+1 (226) 972-6927</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#facc15] border border-gray-50">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Location</p>
                  <p className="font-bold text-base sm:text-lg md:text-xl text-[#0f172a]">Kitchener Ontario Canada</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi ClusterCrew! I want to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 sm:mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_15px_30px_rgba(37,211,102,0.3)] transition-all active:scale-95"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* ── RIGHT: Form ── */}
<motion.div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border">

            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle size={40} className="mx-auto text-[#facc15]" />
                <h3 className="text-2xl font-bold mt-4">Message Sent!</h3>
                <p className="text-gray-500 mt-2">
                  Your message has been sent to our email. We'll reply soon.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-4 bg-gray-50 rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-4 bg-gray-50 rounded-xl"
                />

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 rounded-xl"
                >
                  <option value="default" disabled>Select Service</option> <option value="AI Agents & Automation">AI Agents & Automation</option> <option value="Web Development">Web Development</option> <option value="Mobile App Development">Mobile App Development</option> <option value="UI/UX & Graphic Design">UI/UX & Graphic Design</option> <option value="Machine Learning / NLP">Machine Learning / NLP</option> <option value="Full-Stack SaaS">Full-Stack SaaS</option> <option value="Other">Other</option> </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-4 bg-gray-50 rounded-xl"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0f172a] text-white rounded-xl font-bold"
                >
                  {status === "loading" ? "Sending..." : "Launch Inquiry 🚀"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}