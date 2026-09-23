import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

function Navbar() {

  const nav = useNavigate();
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold px-4'>
      <div className='flex items-center gap-2'>
        <img onClick={() => nav(-1)} className ='w-8 bg-white/20 backdrop-blur-md  p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='Go back'/>
        <img onClick={() => nav(1)} className ='w-8 bg-white/20 backdrop-blur-md p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt='Go forward'/>
      </div>
      <div className='flex items-center gap-2'>
        <p className='bg-white text-black text-[15px] px-4 py-2 rounded-full hidden md:block cursor-pointer hover:bg-gray-100'>Explore Premium</p>
        <p className='bg-white/20 backdrop-blur-md text-white text-[15px] px-4 py-2 rounded-full hidden md:block cursor-pointer'>Install App</p>
        <p className='bg-orange-500  text-white w-7 h-7 rounded-full items-center justify-center flex text-[15px] cursor-pointer'>KS</p>
      </div>
    </div>
     <div className='flex items-center gap-2 mt-6 px-4'>
        <p className=' bg-white text-black px-4 py-1 rounded-full cursor-pointer font-bold'>All</p>
        <p className='bg-white/20 backdrop-blur-md px-4 py-1 rounded-full cursor-pointer'>Music</p>
        <p className='bg-white/20 backdrop-blur-md px-4 py-1 rounded-full cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar