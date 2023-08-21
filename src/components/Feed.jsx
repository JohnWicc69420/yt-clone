import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextAPI";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  return (
    <>
      <div className="h-[calc(100%-56px)] flex flex-row dark:bg-[#0F0F0F]">
        <LeftNav />
        <div className="overflow-y-auto grow w-[calc(100%-240px)] h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {searchResults.map((item) => {
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
