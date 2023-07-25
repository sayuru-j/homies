"use client";

import UserService from "@/lib/services/user-service";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

interface Post {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
  };
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  console.log(posts);

  useEffect(() => {
    UserService.getFeed().then((i) => setPosts(i));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <div className="flex items-center justify-between max-w-sm">
            <div>
              <h1>{post.author.name}</h1>
              <h2>{post.createdAt}</h2>
            </div>
            <Icons.tripleDot />
          </div>
        </div>
      ))}
    </div>
  );
}
