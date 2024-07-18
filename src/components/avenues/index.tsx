import React from "react";
import { Avenue } from "src/services/types";

const AvenueChip = ({ avenue }: { avenue?: Avenue }) => {
  return (
    <a
      key={avenue?.id}
      href={`/avenues/${avenue?.slug}?id=${avenue?.id}`}
      className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-center hover:bg-gray-300"
    >
      {avenue?.name}<br />
      <sup>{avenue?.description}</sup>
    </a>
  );
};

export default AvenueChip;
