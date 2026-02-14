import AboutSection from "@/components/AboutSection";
import CaregiverSlider from "@/components/CaregiverSlider";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <main className="min-h-screen w-full bg-white dark:bg-black">
        <CaregiverSlider />
        <AboutSection />
        <ServicesSection />
        <Testimonials />
      </main>
    </div>
  );
}
