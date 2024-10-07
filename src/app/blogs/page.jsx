import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Blogs",
  description: "All blogs about Feature",
  keywords: ["blog,blogs,all feature blog,feature"],
};

const page = () => {
  const blogs = [
    {
      id: 100001,
      title: "Top 10 Real Estate Trends in 2024",
      author: "John Smith",
    },
    {
      id: 100002,
      title: "How to Invest in Rental Properties",
      author: "Jane Doe",
    },
    {
      id: 100003,
      title: "The Pros and Cons of Buying a Foreclosed Home",
      author: "Michael Lee",
    },
    {
      id: 100004,
      title: "The Ultimate Guide to Selling Your Home in 2024",
      author: "Sarah Johnson",
    },
    {
      id: 100005,
      title: "How to Stage Your Home for a Quick Sale",
      author: "David Brown",
    },
    {
      id: 100006,
      title: "The Benefits of Investing in Commercial Real Estate",
      author: "Laura Wilson",
    },
    {
      id: 100007,
      title: "How to Choose the Right Mortgage for Your Home",
      author: "Daniel Davis",
    },
    {
      id: 100008,
      title: "Top 5 Real Estate Apps for Buyers and Sellers",
      author: "Emily White",
    },
    {
      id: 100009,
      title: "Understanding Property Taxes: A Beginner’s Guide",
      author: "Chris Green",
    },
    {
      id: 100010,
      title: "How to Negotiate the Best Deal on a Home",
      author: "Sophia Martinez",
    },
  ];

  //   console.log(blogs);

  return (
    <div>
      <h3>The blogs are here.</h3>
      <div className="space-y-5 ">
        {blogs.map((blog) => (
          <div
            className="p-4 gap-3 border-2 flex flex-col justify-center border-green-400"
            key={blog.idMain}
          >
            <h3>id: {blog.idMain}</h3>
            <h3>Title: {blog.title}</h3>
            <h3>Author Name: {blog.author}</h3>
            <button className="bg-green-600 w-20 h-10  text-white">
              <Link href={`/blogs/${blog.id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
