import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};



const PostsPage = async () => {
  const postsData = await getPosts();
  //   console.log(postsData);
  return (
    <div>
      <h3>All posts : {postsData.length}</h3>
      <div className="grid grid-cols-4 gap-5 ">
        {postsData?.slice(0, 15).map((post) => (
          <div className="space-y-2 border-2 p-3 border-red-500" key={post?.id}>
            <h5>
              <span className="font-bold">Title</span> : {post?.title}
            </h5>
            <h5>
              <span className="font-bold">Description</span> : {post?.body}
            </h5>
            <button className="bg-green-400 w-16 py-2">
              <Link href={`posts/${post.id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
