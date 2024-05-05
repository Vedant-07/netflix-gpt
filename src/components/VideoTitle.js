const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full h-full ">
      <div className=" aspect-video pt-[20%] px-16 text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className="bg-white text-black p-2 px-12 text-xl rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="mx-2 bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

  export default VideoTitle;