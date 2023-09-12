import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { tokens, pageId } = await request.json();
  console.log(tokens, pageId);

  try {
    const response = await axios.get(
      `https://api.notion.com/v1/blocks/${pageId}/children`,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
      }
    );


    return NextResponse.json(response.data); // Return the data as a JSON response
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
