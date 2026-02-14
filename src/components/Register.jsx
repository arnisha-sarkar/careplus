"use client";

import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[0].value;

    try {
      const res = await fetch("/api/auth/register");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="">
      <h1 className="">Create an Account</h1>
      <h2 className="">Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit()} className="">
        <input type="text" placeholder="Username" required className="" />
        <input type="text" placeholder="Email" required className="" />
        <input type="password" placeholder="Password" required className="" />
        <button className="">Register</button>
        {/* {error && "Something went wrong!"} */}
      </form>
      {error && "something went wrong"}
      <span className="">- OR -</span>
      <Link className="" href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
