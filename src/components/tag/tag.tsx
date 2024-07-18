import React from "react";

const Tag = ({ tag }: { tag?: { id: number; name: string; slug: string } }) => {
  return (
    <a
      key={tag?.id}
      href={`/tags/${tag?.slug}?id=${tag?.id}`}
      className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-center hover:bg-gray-300"
    >
      {tag?.name}
    </a>
  );
};

export default Tag;
