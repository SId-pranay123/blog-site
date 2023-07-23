import Blog from "@/models/blog";
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server";


export const GET = async ()=>{
    await connectDB();
    const blogs = await Blog.find({}).populate('creator')
    return NextResponse.json({ blogs });
}