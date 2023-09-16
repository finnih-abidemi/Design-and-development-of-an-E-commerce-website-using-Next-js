import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request) {
    console.log("reached here")
  try{
    const { cartItem, id } = await request.json();

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  if (!cartItem) {
    return NextResponse.json({ message: "Please fill in all fields" }, { status: 400 });
  }

  console.log(cartItem)

  await connect();

  const user = await UserProfile.findOne({ _id: id });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  user.cartItems = cartItem;

  await user.save();
  
  return NextResponse.json({ message: "Product added to cart successfully" });
  }catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
