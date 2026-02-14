"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
  return <h1>Dashboard</h1>;
};

export default Dashboard;
