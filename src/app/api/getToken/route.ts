import { NextResponse } from "next/server";
import axios from "axios";
import connect from "@/libs/mongo";
import UserProfile from "@/models/local_user";

connect();

export async function GET(request) {
    const code = request.nextUrl.searchParams.get("code");
  
    const clientId = process.env.NEXT_PUBLIC_NOTION_CLIENT_ID;
    const clientSecret = process.env.NOTION_CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString(
      "base64"
    );

    try {
      const response = await axios.post(
        "https://api.notion.com/v1/oauth/token",
        {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirectUri,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Basic ${encoded}`,
          },
        }
      );
      return NextResponse.json(response.data);
    } catch (error) {
      return NextResponse.error();
    }  
  }

  export async function POST(request) {
    const { data, email } = await request.json();
  
    if (data === null && email === null) {
      return NextResponse.error();
    }
  
    const { access_token, workspace_name, workspace_id, duplicated_template_id } = data;
  
    const updatedUserProfile = await UserProfile.findOneAndUpdate(
      { email: email },
      {
        $set: {
          "notionData.access_token": access_token || "string",
          "notionData.workspace_name": workspace_name || "string",
          "notionData.workspace_id": workspace_id || "string",
          "notionData.duplicate_template_id": duplicated_template_id || "string",
        },
      },
      { new: true }
    );
  
    return NextResponse.json(updatedUserProfile);
  }
  