"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-black mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          At ClusterCrew, we respect your privacy and are committed to protecting your personal information.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We may collect your name, email, phone number, and project details when you contact us.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">How We Use Information</h2>
        <p className="text-gray-600 mb-4">
          Your information is used to communicate, provide services, and improve user experience.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Data Protection</h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your data and do not sell your information.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-gray-600">
          Email: clustercrew5@gmail.com
        </p>
      </div>

      <Footer />
    </div>
  );
}