"use client";
import React from "react";
import { FaHeart, FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const AboutSection = () => {
  const missions = [
    {
      id: 1,
      icon: <FaHeart className="w-6 h-6 text-teal-500" />,
      title: "Compassionate Care",
      desc: "Our primary mission is to provide care that comes from the heart, ensuring every individual feels loved.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="w-6 h-6 text-teal-500" />,
      title: "Safety & Trust",
      desc: "We maintain the highest standards of safety and integrity to build lasting trust with families.",
    },
    {
      id: 3,
      icon: <FaUsers className="w-6 h-6 text-teal-500" />,
      title: "Community First",
      desc: "We aim to create a supportive community where caregivers and families connect seamlessly.",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image with Badge */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1470&auto=format&fit=crop"
                alt="Caregiving Mission"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <FaAward className="text-4xl mb-2" />
                <p className="text-2xl font-bold italic">Reliable</p>
                <p className="text-sm opacity-90 tracking-widest uppercase font-semibold">
                  Service Provider
                </p>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-teal-100 rounded-3xl -z-10 hidden lg:block"></div>
          </div>

          {/* Right Side: Mission Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-600 font-bold tracking-[0.2em] uppercase text-xs">
                <HiSparkles size={20} />
                <span>Our Mission & Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Enhancing Quality of Life <br />
                <span className="text-teal-600 underline decoration-teal-100">
                  Through Care.
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
                We bridge the gap between those in need and compassionate
                professionals. Our mission is to ensure that everyone can
                receive high-quality care in the place they love most: **home**.
              </p>
            </div>

            {/* Missions List */}
            <div className="space-y-6">
              {missions.map((item) => (
                <div key={item.id} className="flex items-start gap-5 group">
                  <div className="p-4 bg-teal-50 rounded-2xl group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-teal-600 transition-colors shadow-lg">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
