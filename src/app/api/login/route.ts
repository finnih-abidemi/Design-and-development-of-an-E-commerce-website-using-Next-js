import bcrypt from "bcrypt";
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json(); // Get email and password from request body
    // Check for missing fields
    if (!email || !password) {
      return NextResponse.json({ message: "Please fill in all fields" });
    }

    await connect(); // Connect to MongoDB
    
    const user = await UserProfile.findOne({ email });  // Find user in database
    // Check if user exists
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 401 }
      );
    }

    // If password is correct, return user
    const newUser = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      orderHistory: user.orderHistory,
      cartItems: user.cartItems,
    };

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
