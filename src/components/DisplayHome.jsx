import { albumsData, songsData } from '../assets/assets'
import Albumitems from './Albumitems'
import Navbar from './Navbar'
import Songitems from './Songitems'

function DisplayHome() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#8b1111] via-[#3d0b0b] to-[#121212]">
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl px-4'>Your top mixes</h1>
        <div className='flex overflow-auto px-4'>
          {albumsData.map((item,index) => (
            <Albumitems 
            key={index} 
            name={item.name} 
            desc={item.desc} 
            image={item.image} 
            id={item.id} />
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl px-4'>Recently Played</h1>
        <div className='flex overflow-auto px-4'>
          {songsData.map((item,index)=>(
            <Songitems
            key={index}
            name={item.name}
            desc={item.desc}
            image={item.image}
            id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome