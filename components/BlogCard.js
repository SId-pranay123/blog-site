import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  // const { data: session } = useSession();
  // console.log(session);

  return (
    <div className="flex justify-center">
      <Link href={`/blog/${post?._id}`} className="w-full h-full">
        
          <div className="w-full">
            <div
              className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover "
              style={{
                backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)), 
                              url(${post?.image})`,
              }}
            />
          </div>
          <div className="m-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h5>
            <p className="mb-3 font-normal text-gray ">{post.idea}</p>
          </div>
          <div >{`- ${post.creator.name}`}</div>
      
      </Link>
    </div>
  );
};

export default BlogCard;
