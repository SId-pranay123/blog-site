import Blog from "@/models/blog";
import { connectDB } from "@/utils/db";

export const GET = async (request, { params }) => {
    try {
        await connectDB()

        const blog = await Blog.findById(params.id).populate("creator")
        if (!blog) return new Response("blog Not Found", { status: 404 });

        return new Response(JSON.stringify(blog), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}
