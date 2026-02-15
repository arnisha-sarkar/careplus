"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const servicePrices = {
  "baby-care": 25,
  "elderly-service": 30,
  "sick-people-service": 35,
};

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [formData, setFormData] = useState({
    duration: 1,
    division: "",
    district: "",
    city: "",
    address: "",
  });

  if (status === "loading")
    return <p className="text-center p-20">Loading...</p>;
  if (!session) router.push("/login");

  const unitPrice = servicePrices[id] || 0;
  const totalCost = formData.duration * unitPrice;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        serviceName: id,
        duration: formData.duration,
        location: {
          division: formData.division,
          district: formData.district,
          city: formData.city,
          address: formData.address,
        },
        totalCost,
      }),
    });

    if (res.ok) {
      alert("Booking Confirmed!");
      router.push("/my-bookings");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8  shadow-2xl rounded-3xl border border-slate-100">
      <h2 className="text-2xl font-black mb-6 text-slate-800 uppercase tracking-tight">
        Booking: {id.replace(/-/g, " ")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Step 1: Duration */}
        <div>
          <label className="block text-sm font-bold text-slate-600 mb-2">
            Duration (Hours)
          </label>
          <input
            type="number"
            min="1"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="w-full p-4  border rounded-xl outline-none focus:border-teal-500"
            required
          />
        </div>

        {/* Step 2: Location Grid */}
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Division"
            onChange={(e) =>
              setFormData({ ...formData, division: e.target.value })
            }
            className="p-4  border rounded-xl"
            required
          />
          <input
            placeholder="District"
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            className="p-4  border rounded-xl"
            required
          />
          <input
            placeholder="City/Area"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="p-4  border rounded-xl"
            required
          />
          <input
            placeholder="Full Address"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="p-4  border rounded-xl"
            required
          />
        </div>

        {/* Step 3: Price Calculation Display */}
        <div className=" p-6 rounded-2xl flex justify-between items-center border border-teal-100">
          <div>
            <p className="text-xs font-bold text-teal-600 uppercase">
              Total Payable
            </p>
            <p className="text-sm text-teal-500">
              ${unitPrice} x {formData.duration} hrs
            </p>
          </div>
          <p className="text-3xl font-black text-teal-700">${totalCost}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-teal-600 transition-all"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
