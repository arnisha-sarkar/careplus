// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const Register = () => {
//   const [error, setError] = useState(false);
//   const router = useRouter();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ইনপুট থেকে ভ্যালু নেওয়া
//     const name = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;

//     console.log("Sending data:", { name, email, password }); // চেক করার জন্য

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       });

//       if (res.status === 201) {
//         router.push("/login");
//       } else {
//         const errorText = await res.text();
//         console.error("Server Error:", errorText);
//         setError(true);
//       }
//     } catch (error) {
//       console.error("Fetch Error:", error);
//       setError(true);
//     }
//   };
//   return (
//     <div className="">
//       <h1 className="">Create an Account</h1>
//       <h2 className="">Please sign up to see the dashboard.</h2>
//       <form onSubmit={handleSubmit} className="">
//         <input type="text" placeholder="Username" required className="" />
//         <input type="text" placeholder="Email" required className="" />
//         <input type="password" placeholder="Password" required className="" />
//         <button className="">Register</button>
//         {/* {error && "Something went wrong!"} */}
//       </form>
//       {error && "something went wrong"}
//       <span className="">- OR -</span>
//       <Link className="" href="/dashboard/login">
//         Login with an existing account
//       </Link>
//     </div>
//   );
// };

// export default Register;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const nid = e.target[2].value;
    const contact = e.target[3].value;
    const password = e.target[4].value;

    // --- Password Validation Logic ---
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 6+ chars, with 1 uppercase & 1 lowercase letter.",
      );
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, nid, contact, password }),
      });

      if (res.status === 201) {
        // রিকয়ারমেন্ট অনুযায়ী সাকসেস হলে লগইন বা ডিরেক্ট বুকিং পেজে পাঠানো
        router.push("/login?success=Account created! Please login.");
      } else {
        setError("User already exists or server error.");
      }
    } catch (error) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-[450px] bg-gradient-to-b from-slate-900 to-black p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-[0.2em]">
            Join CarePlus Network
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-600 group-focus-within:text-teal-500 transition-colors">
              <FaUser size={14} />
            </span>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white text-sm outline-none focus:border-teal-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-600 group-focus-within:text-teal-500 transition-colors">
              <FaEnvelope size={14} />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white text-sm outline-none focus:border-teal-500 transition-all"
            />
          </div>

          {/* NID No */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-600 group-focus-within:text-teal-500 transition-colors">
              <FaIdCard size={14} />
            </span>
            <input
              type="text"
              placeholder="NID Number"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white text-sm outline-none focus:border-teal-500 transition-all"
            />
          </div>

          {/* Contact */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-600 group-focus-within:text-teal-500 transition-colors">
              <FaPhone size={14} />
            </span>
            <input
              type="text"
              placeholder="Contact Number"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white text-sm outline-none focus:border-teal-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-600 group-focus-within:text-teal-500 transition-colors">
              <FaLock size={14} />
            </span>
            <input
              type="password"
              placeholder="Password (Min 6 chars, A, a)"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-800 rounded-2xl text-white text-sm outline-none focus:border-teal-500 transition-all"
            />
          </div>

          {error && (
            <p className="text-red-500 text-[10px] font-bold text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-teal-500 transition-all group"
          >
            Register Now{" "}
            <FaArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={12}
            />
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white font-bold hover:text-teal-500 transition-colors underline underline-offset-4"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
