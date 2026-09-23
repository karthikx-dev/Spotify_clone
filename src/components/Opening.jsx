import video from '../assets/Spotify-intro.mp4'

const Opening = () => {
  return (
   <div className="h-screen bg-black flex items-center justify-center">
      <video  className ='w-[75%] object-cover mix-blend-screen' src={video} preload="auto" autoPlay loop muted></video>
    </div>
  )
}

export default Opening