/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

const LatestVideo = () => {
  const [latestVideo, setLatestVideo] = useState("");

  useEffect(() => {
    void fetch("/api/latestvideo")
      .then((data) => data.json())
      .then((data) => setLatestVideo(data.url));
  }, []);

  return (
    <div className="flex flex-col items-stretch gap-2 p-4">
      <h1 className="text-3xl">Latest Video</h1>
      <div className="h-[18.75rem] bg-black">
        <ReactPlayer url={latestVideo} width={"100%"} height="100%" />
      </div>
      <a
        href="https://www.youtube.com/c/KoulTime"
        target="_blank"
        rel="noreferrer"
        className="text-right text-[#FF5400] transition-all hover:underline"
      >
        more on our channel
      </a>
    </div>
  );
};

export default LatestVideo;
