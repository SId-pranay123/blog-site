"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


const Blog = ({params:{id}}) => {
    const [blog,setBlog] = useState(null);
    useEffect(() => {
        const fetchblog = async () => {
            const response = await fetch(`/api/blogs/${id}`);
            const data = await response.json();
      
            setBlog(data);
          };
          fetchblog();
    }, [])
    

  return (

    <div className="flexStart flex-col mb-16 w-full h-full -mt-14">
      <div className="rounded-xl overflow-hidden w-full h-full">
        <div
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover w-full h-full"
          style={{
            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)), 
                              url(${blog?.image})`,
          }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
              <h1>{blog?.title}</h1>
              <p className="text-lg">{blog?.idea}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-2 paddings mt-20">
          <div className="justify-center mr-10">
            <h1 className="font-semibold">
              Written By-
            </h1>
            <p><Link href={{pathname:`/profile/${blog?.creator?._id}`, query:{object:JSON.stringify(blog)}}}>{blog?.creator?.name}</Link></p>
          </div>
          <div className="col-span-2 text-2xl justify-center items-center max-w-6xl ">

          {blog?.description}
          </div>
      </div>
    </div>
  );
};

export default Blog;
