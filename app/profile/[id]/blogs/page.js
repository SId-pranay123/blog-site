"use client";

import ProfilePage from "@/components/ProfilePage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const MyBlogs = () => {const { data: session } = useSession();

const [myPosts, setMyPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`,{
      cache: "no-store",
    });
    const data = await response.json();

    setMyPosts(data);
  };

  if (session?.user.id) fetchPosts();
}, [session?.user.id]);

return (
  <ProfilePage
  data={myPosts}
/>
);
};


export default MyBlogs