"use client";

import { useState } from "react";
import thumbnail from "../../public/thumbnail.png";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { FaPlay } from "react-icons/fa";

export const CustomVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle play button click
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative">
      {isPlaying ? (
        // Show YouTube iframe when play button is clicked
        <div className="aspect-[16/11] md:rounded-2xl overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=b6XPvDiYWM8?si=jg41Q3dVk5u-_Kb_`}
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        // Show custom thumbnail with play button when isPlaying is false
        <div className="relative cursor-pointer" onClick={handlePlay}>
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            className="md:rounded-2xl"
          />
          {/* Custom Play button */}
          <div className="absolute inset-0 grid place-items-center">
            <button className="grid place-items-center text-[#CC2727] text-4xl size-20 rounded-full bg-white">
              <FaPlay size={36} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
