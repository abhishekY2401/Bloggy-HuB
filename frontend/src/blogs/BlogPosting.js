import React from "react";

function BlogPosting(props) {
  const { url, text, title, description } = props;

  return (
    <div className="w-96 flex-column justify-center">
      <img src={url} alt={text} className="object-contain" />
      <h2 className="text-xl font-sans mt-4 font-medium">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default BlogPosting;
