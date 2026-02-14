"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaArrowLeft,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const servicesData = {
  "baby-care": {
    title: "Expert Baby Care",
    description: "NURTURING CARE FOR YOUR LITTLE ONES.",
    details:
      "Our Baby Care service provides experienced caregivers who specialize in newborn care, feeding, hygiene, and sleep training. We prioritize safety and emotional development above all else.",
    features: [
      "24/7 Monitoring",
      "Nutrition Management",
      "Early Learning Support",
      "Pediatric First Aid",
    ],
    image:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1470&auto=format&fit=crop",
    price: "25",
  },
  "elderly-service": {
    title: "Elderly Service",
    description: "DIGNIFIED SUPPORT FOR SENIORS.",
    details:
      "Compassionate care focused on daily assistance, medication management, and emotional companionship for a better quality of life.",
    features: [
      "Medication Reminders",
      "Mobility Assistance",
      "Meal Planning",
      "Doctor Support",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731522-a20478d45903?q=80&w=1470&auto=format&fit=crop",
    price: "30",
  },
  "sick-people-service": {
    title: "Patient Care",
    description: "PROFESSIONAL MEDICAL RECOVERY SUPPORT.",
    details:
      "Skilled nursing and post-surgical care provided at home to ensure a fast and effective recovery process under expert supervision.",
    features: [
      "Post-Surgical Support",
      "Wound Management",
      "Vitals Monitoring",
      "Prescription Follow-up",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173bdd99611?q=80&w=1470&auto=format&fit=crop",
    price: "35",
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const service = servicesData[params.id];

  if (!service) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="bg-slate-50 min-h-screen pb-10">
      {/* 1. Simple Back Button & Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="text-slate-600 hover:text-teal-600"
        >
          <FaArrowLeft />
        </button>
        <h1 className="font-bold text-slate-800 text-xl">Service Details</h1>
      </div>

      <div className="container mx-auto px-4 md:px-10 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Card */}
            <div className="rounded-3xl overflow-hidden shadow-sm">
              <img
                src={service.image}
                className="w-full h-[300px] md:h-[400px] object-cover"
                alt=""
              />
            </div>

            {/* Overview Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-teal-600 mb-2">
                <FaInfoCircle />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {service.description}
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                {service.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.details}
              </p>
            </div>

            {/* Features Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight italic">
                What You'll Get
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <FaCheckCircle className="text-teal-500" />
                    <span className="font-medium text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Book Button */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                  Rate
                </span>
                <div className="flex items-baseline">
                  <span className="text-4xl font-black text-slate-900">
                    ${service.price}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">
                    /hr
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-teal-500 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Verified Professional
                    </p>
                    <p className="text-xs text-slate-500 tracking-tight">
                      Background checked & certified staff
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaStar className="text-yellow-400 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Top Rated Service
                    </p>
                    <p className="text-xs text-slate-500 tracking-tight">
                      Based on 100+ positive reviews
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => router.push("/login")} // জাস্ট লজিক টেস্টের জন্য লগইন এ পাঠানো হলো
                className="w-full bg-slate-900 hover:bg-teal-600 text-white py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group"
              >
                Book Service{" "}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[10px] text-slate-400 mt-6 font-medium leading-none">
                SECURE CHECKOUT • 24/7 SUPPORT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
