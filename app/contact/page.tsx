"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Send, MapPin, Phone, ChevronDown } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen relative overflow-x-hidden selection:bg-[#facc15]">
      <Navbar />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#facc15]/5 rounded-full blur-[120px] -z-10" />

      <main className="max-w-screen-2xl mx-auto px-8 pt-44 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-black tracking-tighter leading-none mb-8 text-[#0f172a]">
              Let's <br /> <span className="text-[#facc15]">Talk.</span>
            </h1>
            
            <p className="text-gray-500 text-lg mb-12 max-w-md">
              Have a project in mind? Reach out to us and let's build something exceptional together.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#facc15] group-hover:scale-110 transition-transform border border-gray-50">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Us</p>
                  <p className="font-bold text-xl text-[#0f172a] group-hover:text-[#facc15] transition-colors">hello@clustercrew.ai</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#facc15] group-hover:scale-110 transition-transform border border-gray-50">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Call Us</p>
                  <p className="font-bold text-xl text-[#0f172a] group-hover:text-[#facc15] transition-colors">+92 319 0453945</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#facc15] group-hover:scale-110 transition-transform border border-gray-50">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Location</p>
                  <p className="font-bold text-xl text-[#0f172a]">Mirpur Khas, Sindh, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: INQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-12 rounded-[50px] shadow-2xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-6 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#facc15] border border-transparent focus:bg-white transition-all font-medium" 
                />
              </div>
              
              <div className="relative space-y-2">
                <select 
                  defaultValue="default"
                  className="w-full p-6 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#facc15] appearance-none cursor-pointer border border-transparent focus:bg-white transition-all font-medium text-gray-600"
                >
                  <option value="default" disabled>Select Service</option>
                  <option value="ai">AI Sales Agent Development</option>
                  <option value="reports">Technical Reporting & Documentation</option>
                  <option value="design">UI/UX & Web Design</option>
                  <option value="fullstack">Full-Stack Solution</option>
                  <option value="fullstack">Other</option>
                </select>
                <ChevronDown className="absolute right-6 top-[50%] -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>

              <div className="space-y-2">
                <textarea 
                  rows={4} 
                  placeholder="Share your project vision..." 
                  className="w-full p-6 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#facc15] resize-none border border-transparent focus:bg-white transition-all font-medium" 
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-[#0f172a] text-white font-black rounded-2xl hover:bg-[#facc15] hover:text-[#0f172a] transition-all flex items-center justify-center gap-2 shadow-xl text-lg uppercase tracking-tight"
              >
                Launch Inquiry <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}