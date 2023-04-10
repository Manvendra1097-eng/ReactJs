import React from "react";

const Card = ({ post }) => {
  return (
    <div className="w-11/12 mx-auto px-6 py-2 flex flex-col gap-y-2">
      <p className="font-bold ">{post.title}</p>
      <div className="text-xs">
        <p>
          By <span className="italic">{post.author}</span>
          on <span className="underline">{post.category}</span>
        </p>
        <p>Posted on {post.date}</p>
      </div>
      <p className="text-sm">{post.content}</p>
      <div className="flex space-x-2 text-xs text-blue-600">
        {post.tags.map((tag, index) => (
          <span className="underline font-semibold" key={index}>{`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
