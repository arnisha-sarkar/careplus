"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2A9D8F] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-[120px] font-black text-slate-100 leading-none mb-2">
        404
      </h1>
      <h2 className="text-3xl font-bold text-[#264653] mt-[-40px] mb-2">
        Page Not Found!
      </h2>
      <p className="text-[#6C757D] mt-4 max-w-sm mb-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        href="/"
        className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-teal-600 transition-all"
      >
        <FaHome /> Back to Home
      </Link>
    </div>
  );
}
