"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Compassion is Our Calling",
    desc: "We don't just provide care; we stand by you like family, ensuring comfort and dignity in every step.",
    bg: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1470&auto=format&fit=crop",
    btnText: "Explore Our Services",
  },
  {
    id: 2,
    title: "Exceptional Care for Your Loved Ones",
    desc: "Ensure a safe and healthy life with our skilled, compassionate, and professional caregivers.",
    bg: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1470&auto=format&fit=crop",
    btnText: "Book an Appointment",
  },
  {
    id: 3,
    title: "Your Partner in Health & Happiness",
    desc: "Our mission is to eliminate loneliness and make every moment joyful, safe, and full of life.",
    bg: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1470&auto=format&fit=crop",
    btnText: "Contact Us Today",
  },
];

const CaregiverSlider = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${slide.bg}')`,
              }}
            >
              <div className="container mx-auto px-6 text-white">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl mb-8 text-gray-200">
                    {slide.desc}
                  </p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                    {slide.btnText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-pagination-bullet-active {
          background: #14b8a6 !important;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CaregiverSlider;
