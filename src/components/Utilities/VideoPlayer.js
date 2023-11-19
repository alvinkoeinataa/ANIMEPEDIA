"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideo = () => {
    setIsOpen((prev) => !prev);
  };
  const option = {
    width: "750",
    height: "350",
  };

  const Player = () => {
    return (
      <div className="">
        {/* <button onClick={handleVideo} className="text-color-primary float-right bg-color-secondary px-3 mb-1">
          X
        </button> */}
        <YouTube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} onError={() => alert("Video is broken, please try another")} />
      </div>
    );
  };

  const ButtonOpen = () => {
    return (
      <button onClick={handleVideo} className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpen />;
};

export default VideoPlayer;
