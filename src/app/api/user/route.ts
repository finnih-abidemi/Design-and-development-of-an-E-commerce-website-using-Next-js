import { mongo } from "mongoose";
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";

connect();
export async function POST(request) {
  const { firstName, lastName, email, password, avatar } = await request.json();

  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ message: "Please fill in all fields" });
  }

  const user = await UserProfile.findOne({ email: email });

  if (user) {
    return NextResponse.json({ message: "User with email already exists" }, { status: 401 });
  }

  const newUser = await UserProfile.create({
    firstName,
    lastName,
    email,
    password,
    avatar
  });

  return NextResponse.json(newUser, { status: 201 });
}



export async function GET(request) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ message: "Please provide an email" });
  }

  const user = await UserProfile.findOne({ email: email });
  if (!user) {
    return NextResponse.json({ message: "User not found" });
  }

  return NextResponse.json(user);
}


export async function DELETE(request) {
  const email = request.nextUrl.searchParams.get("id");

  const users = await UserProfile.findOneAndDelete({ email: email });
  return NextResponse.json({ message: "User deleted successfully" });
}
