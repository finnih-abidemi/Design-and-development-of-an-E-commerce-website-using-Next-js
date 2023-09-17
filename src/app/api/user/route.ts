import bcrypt from "bcrypt";
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
try{
  // Get first name, last name, email and password from request body
  const { firstName, lastName, email, password } = await request.json();
  // Check for missing fields
  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ message: "Please fill in all fields" });
  }
  const user = await UserProfile.findOne({ email: email }); // Find user in database
  // Check if user exists
  if (user) {
    return NextResponse.json({ message: "User with email already exists" }, { status: 409 });
  }
  // Hash password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  // Create new user
  const newUser = await UserProfile.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  // Return new user
  return NextResponse.json({ status: 201 });
}catch(error){
  console.error("An error occurred:", error);
  return NextResponse.json({ message: "An error occurred" }, { status: 500 });
}
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


