import React from "react";

const TagCard = ({ tag }: { tag?: { id: number; name: string; slug: string } }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 transition duration-300 hover:border-gray-400 hover:shadow-lg">
      <a
        key={tag?.id}
        href={`/tags/${tag?.slug}?id=${tag?.id}`}
        className="block text-center text-sm font-semibold text-gray-700 hover:text-gray-900"
      >
        {tag?.name}
      </a>
    </div>
  );
};

export default TagCard;
