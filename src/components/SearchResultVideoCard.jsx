import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import abbreviate from "number-abbreviate";

import VideoLength from "../shared/videoLength";

const VideoCard = ({ video }) => {
  return (
    <>
      <Link to={`/video/${video?.videoId}`}>
        <div className="cursor-pointer flex flex-row gap-3 mb-4">
          <div className="relative sm:h-fit sm:w-fit ">
            <img
              className=" w-full h-full object-cover sm:rounded-xl"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            <div className=" absolute bottom-1 right-1 text-white text-xs font-medium bg-black/[0.7] py-[2px] px-[6px] rounded-[4px]">
              {video?.lengthSeconds && (
                <VideoLength length={video?.lengthSeconds} />
              )}
            </div>
          </div>

          <div className=" flex flex-row mt-3">
            <div className="info flex flex-col">
              <span className="title text-white mb-2">{video?.title}</span>
              <span className="channelName text-white/[0.5] text-sm flex items-center mb-2">
                <div className="flex items-start">
                  <div className="avatar flex h-6 w-6 mr-3 overflow-hidden">
                    <img
                      className=" h-full w-full object-cover rounded-full"
                      src={video?.author?.avatar[0]?.url}
                      alt=""
                    />
                  </div>
                </div>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                )}
              </span>
              <div className="stats flex flex-row">
                <span className="views text-white/[0.5] text-sm">
                  <span className=" uppercase">{`${abbreviate(
                    video?.stats?.views
                  )}`}</span>
                  <span> views</span>
                </span>
                <span className="flex text-[24px] leading-none font-medium text-white/[0.6] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="publishTime text-white/[0.5] text-sm">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
