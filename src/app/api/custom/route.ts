import { NextResponse } from "next/server";
import UserProfile from "@/models/local_user";

export async function POST(request: Request) {
  const promptData = await request.json();
  const { email, prompt } = promptData;

  if (!prompt || !email) {
    return NextResponse.json({ error: "Email and prompt are needed" }, { status: 400 });
  }

  try {
    const userProfile = await UserProfile.findOne({ email });

    if (!userProfile) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    userProfile.customPrompts = prompt.customPrompts;
    await userProfile.save();

    return NextResponse.json({ success: true, userProfile }, { status: 200 });
  } catch (error) {
    console.error("Error storing custom prompt:", error);
    return NextResponse.json({ error: "Error storing custom prompt" }, { status: 500 });
  }
}
