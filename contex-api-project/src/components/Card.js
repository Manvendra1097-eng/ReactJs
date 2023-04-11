import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="w-11/12 mx-auto px-6 py-2 flex flex-col gap-y-2">
      <NavLink to={`/blog/${post.id}`}>
        <p className="font-bold ">{post.title}</p>
      </NavLink>
      <div className="text-xs">
        <p>
          By <span className="italic">{post.author}</span>
          on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="underline">{post.category}</span>
          </NavLink>
        </p>
        <p>Posted on {post.date}</p>
      </div>
      <p className="text-sm">{post.content}</p>
      <div className="flex space-x-2 text-xs text-blue-600">
        {post.tags.map((tag, index) => (
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span
              className="underline font-semibold"
              key={index}
            >{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Card;
