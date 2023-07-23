"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const HeroBlog = ({ data }) => {
  const [main, setmain] = useState({});

  const findLatestCreatedAtObject = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; // Return null for empty or non-array inputs
    }

    let latestCreatedAt = new Date(arr[0].createdAt); // Initialize with the first object's createdAt value
    let latestObject = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const currentCreatedAt = new Date(arr[i].createdAt);
      if (currentCreatedAt > latestCreatedAt) {
        latestCreatedAt = currentCreatedAt;
        latestObject = arr[i];
      }
    }
    return latestObject;
  };

  useEffect(() => {
    setmain(findLatestCreatedAtObject(data));
  }, [data]);

  return (
    <Link href={`/blog/${main?._id}`} className="w-full h-full">
      <div className="rounded-xl overflow-hidden ">
        <div
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          style={{
            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)), 
                              url(${main?.image})`,
          }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
              <h1>{main?.title}</h1>
              <p className="text-lg">{main?.idea}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroBlog;
