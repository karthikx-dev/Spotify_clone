import {assets} from '../assets/assets'
import {useNavigate} from "react-router-dom";



const Sidebar = () => {
  const nav = useNavigate();

  return (
    <div className="w-[20%] h-full flex flex-col gap-2 text-white lg:flex">
      <div className =" bg-[#121212] h-[15%] rounded-xl flex flex-col justify-center gap-9">
        <div onClick = {() => nav('/')} className = "flex items-center gap-3 pl-8 cursor-pointer ">
          <img src= {assets.home_icon} alt="Logo"  className="w-6 h-6"/>
          <p className="font-bold">Home</p>
        </div>

        <div className = "flex items-center gap-3 pl-8 cursor-pointer ">
          <img src= {assets.search_icon} alt="Logo"  className="w-6 "/>
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] flex-1 rounded-xl overflow-hidden">
        <div className = "p-5 flex items-center justify-between">
          <div className ='flex items-center gap-3'>
            <img src= {assets.stack_icon} alt="Logo" className="w-6"/>
            <p className="font-semibold">Your Library</p>
          </div>
          <div className ='flex items-center gap-4'>
            <img className='w-6'  src={assets.arrow_icon} alt="Logo"/>                             
            <img className='w-6'  src={assets.plus_icon} alt="Logo"/>
        </div>
        </div>
          <div className = 'p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start  justify-start gap-1 pl-4'>
            <h3 className='text-lg font-bold'>Create your first Playlists</h3>
            <p className='font-light text-sm'>it's easy we will help you</p>
            <button className = 'px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4 hover:bg-gray-100 cursor-pointer'>Create Playlist</button>
          </div>
          <div className = 'p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start  justify-start gap-1 pl-4'>
            <h3 className='text-lg font-bold'>Find some podcasts to follow</h3>
            <p className='font-light text-sm'>We'll keep you updated on new episodes</p>
            <button className = 'px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4 hover:bg-gray-100 cursor-pointer'>Browse Podcasts</button>
          </div>
      </div>
    </div>
  )
}

export default Sidebar