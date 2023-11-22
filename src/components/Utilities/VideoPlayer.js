"use client";

import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "750",
    height: "350",
  };

  return (
    <div>
      <YouTube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} className="flex w-[100vw]" onError={() => alert("Video is broken, please try another")} />
    </div>
  );
};

export default VideoPlayer;
