import React from "react";

const getPostDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );
    const data = await res.json();
  
    return {
      title: `${data?.title}`,
      description: `${data?.body}`,
      keywords : data?.body.split(' ')
    };
  }

const postDetails = async ({ params }) => {
  console.log(params);
  const { title, body, id } = await getPostDetails(params?.id);
  return (
    <div>
      <h3>Post Details of post no : {params?.id}</h3>

      <h4>Id : {id}</h4>
      <h4>Title : {title}</h4>
      <h4>Description : {body}</h4>
    </div>
  );
};

export default postDetails;
