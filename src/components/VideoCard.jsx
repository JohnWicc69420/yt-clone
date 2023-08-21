import React from "react";

const VideoCard = ({ video }) => {
  return <div className="dark:text-white">{video?.title}</div>;
};

export default VideoCard;
