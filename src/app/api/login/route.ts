import { mongo } from "mongoose";
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ message: "Please fill in all fields" });
  }

  await connect();
  const user = await UserProfile.findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (user.password !== password) {
    return NextResponse.json({ message: "Password is incorrect" }, { status: 401 });
  }

  if(!user.referralLink) {
    user.referralLink = `https://prompteasy.co/signup/${user._id}`
    await user.save();
  }

  if (!user.customPrompts) {
    user.customPrompts = [];
    await user.save();
  }

  return NextResponse.json(user, { status: 200 });
}
