import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextAPI";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <>
      <div className="h-[calc(100%-56px)] flex flex-row dark:bg-[#0F0F0F]">
        <LeftNav />
        <div className="grow overflow-y-auto w-[calc(100%-240px)] h-full">
          <div className="grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-0 sm:p-4">
            {!loading &&
              searchResults?.map((item) => {
                if (item.type !== "video") return false;
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
