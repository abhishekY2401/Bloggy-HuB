import React from "react";

function BlogPosting(props) {
  const { url, text, title, category, description } = props;

  return (
    <div className="flex-column max-w-sm rounded-xl shadow-lg">
      <img src={url} alt={text} className="object-cover w-96 h-48" />
      <div className="px-6 py-2 bg-white">
        <div className="px-1 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
        </div>
        <div className="font-bold text-xl pb-2">{title}</div>
        <p className="pb-4">{description}</p>
      </div>
    </div>
  );
}

export default BlogPosting;
