import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";

connect();

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log("id", id);

  if (!id) {
    return NextResponse.json({ message: "Please provide an id" });
  }
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid id format" });
  }

  try {
    const user = await UserProfile.findById(id);

    if (user) {
      return NextResponse.json({ id: user._id, firstName: user.firstName });
    } else {
      return NextResponse.json({ message: "User not found" }, {status: 404});
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({
      message: "An error occurred while fetching user",
    }, {status: 500});
  }
}

export async function POST(request) {
  const { referral, email, firstName, lastName, password, avatar } =
    await request.json();

  console.log("referral", referral);

  if (!referral || !email || !firstName || !lastName || !password)
    return NextResponse.json(
      { message: "Incorrect parameters" },
      { status: 400 }
    );

  if (!ObjectId.isValid(referral)) {
    return NextResponse.json({ message: "Invalid id format" }, { status: 401 });
  }

  const user = await UserProfile.findById(referral);
  if (!user.referral) {
    user.referral = [];
    await user.save();
  }

  if (!user)
    return NextResponse.json({ message: "No referral found" }, { status: 403 });
  console.log(email);

  const findEmail = await UserProfile.findOne({ email: email });
  if (findEmail) {
    // console.log(findEmail);
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 409 }
    );
  }

  try {
    const new_user = await UserProfile.create({
      firstName,
      lastName,
      email,
      password,
      avatar,
      subscriptionType: "paid",
      subscriptionExpiry: null,
      notionData: {
        access_token: "",
        workspace_name: "",
        workspace_id: "",
        duplicate_template_id: "",
      },
      customPrompts: [],
    });
     user.referral = [...user.referral, email];
     await user.save();
    return NextResponse.json(
      new_user,
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      message: "An error occurred while fetching user",
    }, {status: 500});
  }
}
