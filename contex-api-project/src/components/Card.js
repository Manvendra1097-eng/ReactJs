import React from "react";

const Card = ({ post }) => {
  return (
    <div className="w-11/12 mx-auto p-6">
      <p className="font-bold text-2xl">{post.title}</p>
      <p>
        By <span>{post.author}</span>
        on <span>{post.category}</span>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <span key={index}>{`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
