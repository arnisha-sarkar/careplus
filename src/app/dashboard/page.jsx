// "use client";
// import { useSession } from "next-auth/react";

// const Dashboard = () => {
//   const session = useSession();
//   console.log(session);
//   return <h1>Dashboard</h1>;
// };

// export default Dashboard;

"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // ইউজার যদি লগইন না থাকে, তবে তাকে লগইন পেজে পাঠিয়ে দাও
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // ডাটা লোড হওয়ার সময় একটি লোডিং মেসেজ দেখানো ভালো
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      <p>Your Email: {session?.user?.email}</p>
    </div>
  );
};

export default Dashboard;
