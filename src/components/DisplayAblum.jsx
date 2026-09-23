import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/assets"
import {useContext} from "react";
import { PlayerContext } from "../context/PlayerContext";


const DisplayAblum = () => {

  const {id} = useParams();
  const albumDatalocal = albumsData[id];
  const {playWithId} = useContext(PlayerContext);

  
  return (
    <>
      <Navbar/>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-4">
        <img className="w-48 rounded" src = {albumDatalocal.image} alt="" />
        <div className="flex flex-col ">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-6">
            {albumDatalocal.name}
          </h2>
          <h4>{albumDatalocal.desc}</h4>
          <p className=" mt-2">
            <img className="inline-block mr-1 w-5" src={assets.spotify_logo} alt="" />
            <b> Spotify Clone </b> 33,62,251 | 
            <b> 50 songs</b> | about 2hr 35 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 text-[#a7a7a7] px-4">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
      </div>
      <hr className="w-full opacity-20 mb-4"/>
      {
        songsData.map((item,index) => (
          <div onClick={() => playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded p-2 px-4">
            <p className="text-white flex items-center">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5 rounded-md" src={item.image} alt="" />
              {item.name}
            </p>
            <p className="text-[15px]">{albumDatalocal.name}</p>  
            <p className="text-[15px] hidden sm:block">Feb 23, 2026</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))
      }

    </>
  )
}

export default DisplayAblum