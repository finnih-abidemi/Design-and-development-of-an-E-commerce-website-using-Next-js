import { mongo } from "mongoose";
import bcrypt from "bcrypt"; 
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Please fill in all fields" });
    }

    await connect();
    const user = await UserProfile.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Password is incorrect" }, { status: 401 });
    }

    if (!user.referralLink) {
      user.referralLink = `https://prompteasy.co/signup/${user._id}`;
      await user.save();
    }

    if (!user.customPrompts) {
      user.customPrompts = [];
      await user.save();
    }

    const newUser = {
      _id: user._id,
     firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      orderHistory: user.orderHistory,
      cartItems: user.cartItems,
    }

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
