"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl font-black mb-6">
          Refund Policy
        </h1>

        <p className="text-gray-600 mb-6">
          At ClusterCrew, we aim to deliver high-quality services. Refunds are handled as follows:
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Eligibility</h2>
        <p className="text-gray-600 mb-4">
          Refunds may be considered if the project has not been started.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Non-Refundable</h2>
        <p className="text-gray-600 mb-4">
          Once work has started or milestones are completed, payments are non-refundable.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Partial Refunds</h2>
        <p className="text-gray-600 mb-4">
          In some cases, partial refunds may be issued depending on project progress.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
        <p className="text-gray-600">
          Contact us at clustercrew5@gmail.com for refund requests.
        </p>
      </div>

      <Footer />
    </div>
  );
}