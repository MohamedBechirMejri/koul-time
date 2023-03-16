const LatestVideo = () => {
  return (
    <div className="flex flex-col items-stretch gap-2 p-4">
      <h1 className="text-3xl">Latest Video</h1>
      <div className="h-[18.75rem] bg-black"></div>
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
