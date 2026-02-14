"use client";
import Link from "next/link";
import React from "react";
import { FaBaby, FaWheelchair, FaUserNurse } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    desc: "Expert and loving care for your little ones. We ensure a safe, nurturing environment for your baby's growth and happiness.",
    icon: <FaBaby className="w-10 h-10" />,
    color: "bg-blue-50 text-blue-600",
    hoverColor: "group-hover:bg-blue-600",
  },
  {
    id: "elderly-service",
    title: "Elderly Service",
    desc: "Dedicated support for seniors. From daily assistance to emotional companionship, we honor and care for our elders.",
    icon: <FaWheelchair className="w-10 h-10" />,
    color: "bg-teal-50 text-teal-600",
    hoverColor: "group-hover:bg-teal-600",
  },
  {
    id: "sick-people-service",
    title: "Sick People Service",
    desc: "Professional nursing and recovery support at home. We help patients recover faster with personalized medical care.",
    icon: <FaUserNurse className="w-10 h-10" />,
    color: "bg-rose-50 text-rose-600",
    hoverColor: "group-hover:bg-rose-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 w-full bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            Professional Care Services <br />
            <span className="text-teal-600">Tailored For You.</span>
          </h3>
          <p className="text-gray-500 text-lg">
            We provide specialized caregiving services designed to bring
            comfort, safety, and peace of mind to your family.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Box */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${service.color} ${service.hoverColor} group-hover:text-white`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-slate-800 mb-4">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Link/Button */}
              <Link href={`/services/${service.id}`}>
                <button className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  Learn More <HiArrowRight />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
