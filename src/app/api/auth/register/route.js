import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";
import User from "@/models/User";
export const POST = async (request) => {
  const { name, email, password, nid, contact } = await request.json();
  await connect();

  const hashPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashPassword,
    nid,
    contact,
  });
  try {
    await newUser.save();
    return new NextResponse("user has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
