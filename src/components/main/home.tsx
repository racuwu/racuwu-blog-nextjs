import AvenueChip from "@components/avenues";
import Post from "@components/post";
import Tag from "@components/tag/tag";
import React, { useEffect, useState } from "react";
import { getHomeData } from "src/services/post";
import { HomeData } from "src/services/types";

export const HomePage: React.FC = () => {
  const [hd, setHomeData] = useState<HomeData>()
  const initHomeData = async () => {
    const data = await getHomeData()
    setHomeData(data)
  }

  useEffect(() => {
    initHomeData()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h2>Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 mt-4">
        {hd?.featured.map((featured) => (
          <Post key={featured.id} post={featured} />
        ))}
      </div>
      <h2>Pinned Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 mt-2">
        {hd?.pinned.map((pinned) => (
          <Post key={pinned.id} post={pinned} />
        ))}
      </div>
      <h2>Tags</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 mt-2">
        {hd?.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
      <div className="my-4"></div>
      <h2>Avenues</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {hd?.avenues.map((avenue) => (
          <AvenueChip avenue={avenue} key={avenue.id}/>
        ))}
      </div>
    </div>
  );
}
