"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiesPolicy() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-black mb-6">
          Cookie Policy
        </h1>

        <p className="text-gray-600 mb-6">
          This website uses cookies to improve user experience.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">What Are Cookies?</h2>
        <p className="text-gray-600 mb-4">
          Cookies are small data files stored on your device.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">How We Use Cookies</h2>
        <p className="text-gray-600 mb-4">
          We use cookies to analyze traffic and improve our services.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Your Control</h2>
        <p className="text-gray-600">
          You can disable cookies through your browser settings.
        </p>
      </div>

      <Footer />
    </div>
  );
}