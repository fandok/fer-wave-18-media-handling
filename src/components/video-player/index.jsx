import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <ReactPlayer
      onPlay={() => {
        console.log("testing");
      }}
      url="https://www.youtube.com/live/SKNpRfYuBl8?si=1Hpxnv9BuO2LvLM2"
    />
  );
};

export default VideoPlayer;
