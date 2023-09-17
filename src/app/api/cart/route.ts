import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

connect();

export async function POST(request) {
  try{
    const { cartItem, id } = await request.json(); // Get cartItem and id from request body
  // Check for missing fields
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }
  // Check for missing fields
  if (!cartItem) {
    return NextResponse.json({ message: "Please fill in all fields" }, { status: 400 });
  }
  // Find user in database
  const user = await UserProfile.findOne({ _id: id });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  // Add cartItem to user
  user.cartItems = cartItem;

  await user.save(); // Save user to database

  return NextResponse.json({ message: "Product added to cart successfully" }, {status: 201});
  }catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
