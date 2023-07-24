import Blog from "@/models/blog";
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server";


export const GET = async ()=>{
    try{
        await connectDB();
        const blogs = await Blog.find({}).populate('creator')
        return NextResponse.json({ blogs });

    }catch(err){
        console.log(err);
        return NextResponse("Failed to post blog", {status: 500})
    }
}

