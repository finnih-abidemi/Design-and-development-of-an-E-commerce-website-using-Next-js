import prompt from "@/models/prompts";
import connect from "@/libs/mongo";
import { NextResponse } from "next/server";


connect();
export async function GET(request) {
    const slug = request.nextUrl.searchParams.get("slug");
    try {
        const prompts = await prompt.findOne({ slug });
        if(!prompts) {
            return NextResponse.json({ error: "No prompts found" }, { status: 404 });
        }
        return NextResponse.json({ prompts });
    } catch (error) {
        return NextResponse.json({ error: "Error fetching prompts" }, { status: 500 });
    }
}
