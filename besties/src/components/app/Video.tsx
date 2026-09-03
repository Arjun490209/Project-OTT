import Button from "../shered/Button";

const Video = () => {
  return (
    <div className="space-y-6">
      <div
        className="w-full h-0 bg-black rounded-xl"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <video className="w-full h-full absolute top-0 left-0"></video>
        <button
          className="absolute bottom-4 left-4 px-2.5 py-1 text-xs text-white rounded-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          Arjun
        </button>

        <button
          className="absolute bottom-4 right-4 px-2.5 py-1 text-xs text-white rounded-sm cursor-pointer hover:scale-105 duration-150 transition-transform"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <i className="ri-fullscreen-line"></i>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div
          className="w-full h-0 bg-black rounded-xl"
          style={{ paddingBottom: "56.25%", position: "relative" }}
        >
          <video className="w-full h-full absolute top-0 left-0"></video>
          <button
            className="absolute bottom-2 left-2 px-2.5 py-1 text-xs text-white rounded-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            Arjun
          </button>
        </div>

        <Button type="light" icon="user-add-line">
          Add
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 text-white cursor-pointer">
            <i className="ri-video-on-ai-line text-lg"></i>
          </button>

          <button className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-white cursor-pointer">
            <i className="ri-mic-line text-lg"></i>
          </button>

          <button className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 text-white cursor-pointer">
            <i className="ri-tv-2-line text-lg"></i>
          </button>
        </div>

        <Button type="danger" icon="close-circle-fill">
          End
        </Button>
      </div>
    </div>
  );
};

export default Video;
