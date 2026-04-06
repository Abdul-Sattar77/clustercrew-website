"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-black mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          By using ClusterCrew services, you agree to the following terms.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Services</h2>
        <p className="text-gray-600 mb-4">
          We provide AI, development, and digital services tailored to client needs.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Payments</h2>
        <p className="text-gray-600 mb-4">
          Payment terms are agreed before starting any project. Work begins after confirmation.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          We are not responsible for indirect or consequential damages.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Changes</h2>
        <p className="text-gray-600">
          We may update these terms at any time without prior notice.
        </p>
      </div>

      <Footer />
    </div>
  );
}