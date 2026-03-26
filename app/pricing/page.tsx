"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: "2,999", features: ["Basic AI Integration", "5 Automation Flows", "Email Support"] },
  { name: "Growth", price: "7,499", popular: true, features: ["Advanced ML Models", "Unlimited Flows", "24/7 Priority Support", "Custom Branding"] },
  { name: "Enterprise", price: "15k+", features: ["Custom AI Training", "Full Ecosystem Build", "Dedicated Architect", "SLA Guarantee"] },
];

export default function Pricing() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-8 pt-44 pb-32">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-20">
          <h1 className="text-7xl font-black tracking-tighter mb-6">Investment Plans</h1>
          <p className="text-xl text-gray-500">Transparent pricing for game-changing AI.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`relative p-12 rounded-[50px] border-2 ${plan.popular ? "border-[#facc15] bg-white shadow-2xl scale-105 z-10" : "border-gray-100 bg-white/50"}`}
            >
              {plan.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#facc15] text-[#0f172a] px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">Recommended</span>}
              <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
              <div className="my-10">
                <span className="text-6xl font-black tracking-tighter">${plan.price}</span>
                <span className="text-gray-400 font-bold ml-2 italic">/project</span>
              </div>
              <ul className="space-y-5 mb-12">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-3xl font-black text-xl transition-all ${plan.popular ? "bg-[#facc15] text-[#0f172a] hover:shadow-lg shadow-yellow-200" : "bg-[#0f172a] text-white hover:bg-gray-800"}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}