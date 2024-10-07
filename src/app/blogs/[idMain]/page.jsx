import React from "react";

const blogDetails = ({ params }) => {
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

  const blog = blogs.find((blog) => blog.id == params.idMain);
  const  { author, title } = blog
  console.log(blog)
  return (
    <div>
      <h3>Details</h3>
      <h4>{title}</h4>
      <h4>{author}</h4>
    </div>
  );
};

export default blogDetails;
