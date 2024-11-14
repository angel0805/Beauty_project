import bgHeader from '../assets/video/bg-header.mp4';

const NavBar = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <video
        src={bgHeader}
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
      ></video>
      <div className="font-custom text-xl">
        This text uses custom font
      </div>
    </div>
  )
}

export default NavBar