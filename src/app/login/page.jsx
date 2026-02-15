// "use client";
// import Link from "next/link";
// import { signIn } from "next-auth/react";

// export default function Login() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     signIn("credentials", {
//       email,
//       password,
//       callbackUrl: "/",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
//       {/* কার্ডটি ছোট রাখার জন্য max-w-sm ব্যবহার করা হয়েছে */}
//       <div className="w-full max-w-sm bg-gray-50 rounded-3xl shadow-xl p-8 border border-slate-200">
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
//           <p className="text-sm text-slate-500 mt-1">
//             Please enter your details
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="">
//           {/* <input type="text" placeholder="Username" required className="" /> */}
//           <input type="text" placeholder="Email" required className="" />
//           <input type="password" placeholder="Password" required className="" />
//           <button className="">Login</button>
//           {/* {error && "Something went wrong!"} */}
//         </form>
//         <button onClick={() => signIn("google")}>Login with google</button>
//         {/* Footer */}
//         <p className="text-center text-xs text-slate-500 mt-6">
//           Dont have an account?{" "}
//           <Link
//             href="/register"
//             className="text-teal-600 font-bold hover:underline"
//           >
//             Register Here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* মেইন কার্ড */}
      <div className="w-full max-w-md bg-slate-900 rounded-[2rem] shadow-2xl p-10 border border-slate-800">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Welcome <span className="text-teal-500">Back</span>
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Login to manage your care services
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-500">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 pr-4 py-4 bg-black/50 border border-slate-800 rounded-2xl text-white placeholder:text-slate-600 outline-none focus:border-teal-500 transition-all"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-slate-500">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-4 bg-black/50 border border-slate-800 rounded-2xl text-white placeholder:text-slate-600 outline-none focus:border-teal-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-900/20 transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900 px-2 text-slate-500 font-bold">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3  text-black py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-[0.98]"
        >
          <FaGoogle className="text-red-500" />
          Login with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-slate-400 mt-8">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-teal-500 font-bold hover:text-teal-400 transition-colors"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}
