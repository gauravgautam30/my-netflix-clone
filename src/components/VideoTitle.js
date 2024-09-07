const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-[98.7vw] aspect-video pt-36 px-12 text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl p-2 m-2">{title}</h1>
      <p className="w-[35%] p-2 m-2">{overview}</p>
      <div className="p-2 m-2">
        <button className="bg-gray-400 px-6 m-2 p-2 text-white rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-400 px-6 m-2 p-2 text-white rounded-lg">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
