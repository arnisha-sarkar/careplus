"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      {/* কার্ডটি ছোট রাখার জন্য max-w-sm ব্যবহার করা হয়েছে */}
      <div className="w-full max-w-sm bg-gray-50 rounded-3xl shadow-xl p-8 border border-slate-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-sm text-slate-500 mt-1">
            Please enter your details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="">
          {/* <input type="text" placeholder="Username" required className="" /> */}
          <input type="text" placeholder="Email" required className="" />
          <input type="password" placeholder="Password" required className="" />
          <button className="">Login</button>
          {/* {error && "Something went wrong!"} */}
        </form>
        <button onClick={() => signIn("google")}>Login with google</button>
        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Dont have an account?{" "}
          <Link
            href="/register"
            className="text-teal-600 font-bold hover:underline"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}
