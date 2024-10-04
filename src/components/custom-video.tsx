"use client";

import thumbnail from "../../public/thumbnail.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const PlayButton = () => {
  return (
    <div className="absolute grid place-items-center text-[#CC2727] text-4xl size-20 rounded-full bg-white">
      <FaPlay aria-label="Play Video" size={36} />
    </div>
  );
};

export const CustomVideo = () => {
  const matches = useMediaQuery("(min-width: 768px");

  return (
    <div className="relative">
      <div className="aspect-[16/11] md:rounded-2xl overflow-hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=b6XPvDiYWM8"
          playing
          muted={!matches}
          controls
          width="100%"
          height="100%"
          playIcon={<PlayButton />}
          playsinline
          light={<Image src={thumbnail} alt="Thumbnail" />}
        />
      </div>
    </div>
  );
};
