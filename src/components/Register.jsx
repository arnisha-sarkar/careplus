"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ইনপুট থেকে ভ্যালু নেওয়া
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log("Sending data:", { name, email, password }); // চেক করার জন্য

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 201) {
        router.push("/login");
      } else {
        const errorText = await res.text();
        console.error("Server Error:", errorText);
        setError(true);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError(true);
    }
  };
  return (
    <div className="">
      <h1 className="">Create an Account</h1>
      <h2 className="">Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className="">
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
