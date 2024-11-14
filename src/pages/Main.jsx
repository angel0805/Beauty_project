import VideoBackground from '../components/VideoBackground';

const Main = () => {
  return (
    <div id='main' className='relative h-screen w-full bg-gray-300'>
      <VideoBackground />
      <div id='main' className='relative z-10 flex flex-col h-full w-full bg-black bg-opacity-30 text-white'>
        <nav className='flex items-center justify-between'>
          <h3 className="text-lg font-bold">Beauty to you</h3>
          <h4 className='text-lg'>Menu</h4>
        </nav>
      </div>
    </div>
  );
};
export default Main;