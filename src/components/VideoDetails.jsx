import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import abbreviate from "number-abbreviate";
import LeftNav from "./LeftNav";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextAPI";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    const fetchVideoDetails = () => {
      setLoading(true);
      fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
        console.log(res);
        setVideo(res);
        setLoading(false);
      });
    };

    const fetchRelatedVideos = () => {
      setLoading(true);
      fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
        console.log(res);
        setRelatedVideos(res);
        setLoading(false);
      });
    };
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id, setLoading]);

  return (
    <div className="flex w-full h-[calc(100%-56px)] justify-center flex-row bg-[#0F0F0F]">
      <div className="md:hidden">
        <LeftNav />
      </div>
      <div className="w-full z-5 h-full max-w-[1600px] flex flex-col lg:flex-row grow pt-4">
        <div className="flex h-full flex-col lg:w-[calc(100%-250px)] xl:w-[calc(100%-300px)] px-4 pb-6 lg:pb-6">
          <div className="h-[250px] md:h-[450px] lg:h-[550px] xl:h-[650px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <span className="title text-white font-semibold text-md md:text-xl mb-3 mt-4 line-clamp-2">
            {video?.title}
          </span>
          <div className="details flex md:flex-row flex-col justify-between">
            <div className="up flex flex-row">
              <span className="avatar h-11 w-11 overflow-hidden rounded-full mr-3">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                  alt=""
                />
              </span>
              <div className="channel flex flex-col items-start mr-3">
                <span className="title flex flex-row items-center text-white">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-[6px]" />
                  )}
                </span>
                <span className="subs text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </span>
              </div>
              <span className="flex items-center justify-between subButton text-black bg-white/[0.9] hover:bg-[#D9D9D9]/[0.85] cursor-pointer text-base font-semibold pt-1 pb-2 px-3 rounded-[22px]">
                Subscribe
              </span>
            </div>
            <div className="down">
              <div className="flex text-white mt-4 md:mt-0">
                <div className="flex items-center justify-center h-9 px-4 rounded-3xl uppercase cursor-pointer hover:bg-white/[0.3] bg-white/[0.15]">
                  <AiOutlineLike className=" text-base text-white mr-2" />
                  <span className="text-white text-sm">
                    {`${abbreviate(video?.stats?.likes)}`}
                  </span>
                </div>
                <div className="flex items-center justify-center h-9 px-4 rounded-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer ml-4">
                  <span className="uppercase text-sm">
                    {`${abbreviate(video?.stats?.views)}`}
                  </span>
                  &nbsp;
                  <span>views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grow flex overflow-y-auto  flex-col pb-6 px-4 lg:w-[450px] xl:w-[500px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
