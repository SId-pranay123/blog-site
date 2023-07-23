import Blog from "@/models/blog";
import { connectDB } from "@/utils/db";
import {  NextResponse } from "next/server";


export const POST = async(req)=>{
    const {userId, title, idea, description,image,category} = await req.json();

    try {
        await connectDB();
        const newBlog = new Blog({
            creator:userId,
            title, 
            idea,
            description,
            image,
            category
        })
        
        await newBlog.save();

        return NextResponse.json({ message: "Blog Created" }, { status: 201 });
    } catch (error) {
        return NextResponse("Failed to post blog", {status: 500})
    }
}
