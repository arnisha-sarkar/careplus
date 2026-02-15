import connect from "@/utils/db";
import Booking from "@/models/Booking";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const body = await request.json();
    await connect();
    const newBooking = new Booking({ ...body, email: session.user.email });
    await newBooking.save();
    return new NextResponse(JSON.stringify({ message: "Success" }), {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
