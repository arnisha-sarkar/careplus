"use client";
import React from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaUserCheck,
  FaSmile,
  FaAward,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Daughter of Elderly Client",
    review:
      "The caregivers are truly professional. They treated my father like their own family. Highly recommended for senior care!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    name: "Michael Rahman",
    role: "New Parent",
    review:
      "Finding a trustworthy baby caregiver was tough until I found this platform. Their service is exceptional and safe.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael",
  },
  {
    id: 3,
    name: "Emily White",
    role: "Patient Recovering from Surgery",
    review:
      "Their sick people service helped me recover much faster. The nurse was punctual, skilled, and very kind.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=emily",
  },
];

const stats = [
  { id: 1, icon: <FaUserCheck />, count: "500+", label: "Happy Families" },
  { id: 2, icon: <FaAward />, count: "10+", label: "Years Experience" },
  { id: 3, icon: <FaSmile />, count: "99%", label: "Satisfaction Rate" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-16">
        {/* Success Metrics / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center"
            >
              <div className="text-teal-500 text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">
                {stat.count}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            What Our Clients Say
          </h3>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 relative border border-white transition-all hover:border-teal-200 group"
            >
              <div className="absolute -top-5 left-10 bg-teal-500 text-white p-4 rounded-2xl shadow-lg">
                <FaQuoteLeft />
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                <p className="text-slate-600 italic leading-relaxed text-lg">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-teal-500 p-0.5"
                  />
                  <div>
                    <h5 className="font-bold text-slate-900">{item.name}</h5>
                    <p className="text-sm text-teal-600 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
