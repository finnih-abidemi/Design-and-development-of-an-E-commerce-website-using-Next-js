import { NextResponse } from "next/server";
import prompt from "@/models/prompts";
import connect from "@/libs/mongo";

connect();
export async function POST(request: Request) {
    const {title, author, content, slug} = await request.json();
    if(!title || !author || !content || !slug) {
        return NextResponse.json({error: "Missing required fields"}, {status: 400});
    }

    const prompts = await prompt.find({slug});
    if(prompts.length > 0) {
        return NextResponse.json({error: "Slug already exists"}, {status: 400});
    }
    const newPrompt =  await prompt.create({title, author, content, slug});
    return NextResponse.json({prompt: newPrompt});
}

export async function GET(request) {
    try {
        const prompts = await prompt.find();
        if (prompts.length === 0) {
            return NextResponse.json({ error: "No prompts found" }, { status: 404 });
        }
        return NextResponse.json({ prompts });
    } catch (error) {
        return NextResponse.json({ error: "Error fetching prompts" }, { status: 500 });
    }
}

export async function DELETE(request){
    const slug  = request.nextUrl.searchParams.get("slug");
    if(!slug){
        return NextResponse.json({error: "Missing required fields"}, {status: 400});
    }
    try{
        const deletedPrompt = await prompt.findOneAndDelete({slug});
        if(!deletedPrompt){
            return NextResponse.json({error: "Prompt not found"}, {status: 404});
        }
        return NextResponse.json({prompt: deletedPrompt});
    } catch(error){
        return NextResponse.json({error: "Error deleting prompt"}, {status: 500});
    }
}
