"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import HeroBlog from "./HeroBlog";

const Feed = () => {
  const [allBlogs, setAllBlogs] = useState([]);


  const fetchPosts = async () => {
    const response = await fetch("/api/blogs",{
      cache: "no-store",
    });
    const { blogs: data } = await response.json();
    // console.log(data);
    setAllBlogs(data);
  };


  const hero = useMemo(() => <HeroBlog data={allBlogs}/>, [allBlogs])
   

  useEffect(() => {
    fetchPosts();
  }, []);


  const BlogCardList = ({ data, handleTagClick }) => {
    return (
      <>
        {data.map((post) => (
          <BlogCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </>
    );
  };

  return (
    <>
    {hero}
    <section className="blogs-grid">
        <BlogCardList data={allBlogs} handleTagClick={()=>{}} />
    </section>
    </>
  );
};

export default Feed;


