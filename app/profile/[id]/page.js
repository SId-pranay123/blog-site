"use client";


import ProfilePage from "@/components/ProfilePage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const Profile = () => {
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`, {
        cache: "no-store",
      });
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) {
      fetchPosts();
    }else {
      router.push("/")
      // setMyPosts(object)
    }
  }, [session?.user.id]);

  // console.log(myPosts);
  return (
    <ProfilePage
    name="My"
    desc={`Welcome to profile page having exceptional blogs `}
    data={myPosts}
  />
  );
};

export default Profile;
