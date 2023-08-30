import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import abbreviate from "number-abbreviate";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextAPI";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

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

  return (
    <div className="h-full dark:bg-[#0F0F0F] overflow-y-auto">
      <div className="flex h-full dark:bg-[#0F0F0F] flex-col items-start">
        <div>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
        </div>
      </div>
      <div className="hidden h-full dark:bg-[#0F0F0F] md:flex flex-col items-center"></div>
    </div>
  );
};

export default VideoDetails;
