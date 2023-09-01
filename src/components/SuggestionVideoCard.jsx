import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import abbreviate from "number-abbreviate";
import { BiDotsVerticalRounded } from "react-icons/bi";

import VideoLength from "../shared/videoLength";

const VideoCard = ({ video }) => {
  return (
    <>
      <Link to={`/video/${video?.videoId}`}>
        <div className="relative group cursor-pointer sm:flex sm:flex-row gap-3 mb-4 grid grid-cols-2 hover:opacity-80 transition-opacity group">
          <div className="relative sm:min-w-[175px] sm:max-w-[175px]">
            <img
              className=" w-full h-full object-cover sm:rounded-xl"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            <div className=" absolute bottom-1 right-1 text-white text-xs font-medium ">
              <span className=" block group-hover:hidden bg-black/[0.7] py-[2px] px-[6px] rounded-[4px]">
                {video?.lengthSeconds && (
                  <VideoLength length={video?.lengthSeconds} />
                )}
              </span>
            </div>
          </div>

          <div className=" flex flex-row">
            <div className="info flex flex-col">
              <span className="title text-white mb-1 line-clamp-2">
                {video?.title}
              </span>
              <span className="channelName text-white/[0.5] text-sm flex items-center mb-1">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-[6px]" />
                )}
              </span>
              <div className="stats flex flex-row">
                <span className="views text-white/[0.5] text-xs">
                  <span className=" uppercase">{`${abbreviate(
                    video?.stats?.views
                  )}`}</span>
                  <span> views</span>
                </span>
                <span className="flex text-[24px] leading-none font-medium text-white/[0.6] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="publishTime text-white/[0.5] text-xs">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
          <span className="hidden absolute top-[2px] right-[2px] text-white text-lg group-hover:flex justify-center items-center cursor-pointer hover:bg-[#303030]/[0.6] h-5 w-5 rounded-full">
            <BiDotsVerticalRounded />
          </span>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
