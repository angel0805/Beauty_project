import bgHeader from '../assets/video/bg-header.mp4';

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      src={ bgHeader }
      className='absolute h-full w-full object-cover'
    ></video>
  );
};

export default VideoBackground;