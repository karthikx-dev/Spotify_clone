import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAblum from './DisplayAblum'
import { albumsData } from '../assets/assets'

function Display() {

  const loc = useLocation()
  const isAblum = loc.pathname.includes("album")
  const albumID = isAblum ? loc.pathname.slice(-1) : "";
  const bgclr =
    isAblum && albumsData[Number(albumID)]
      ? albumsData[Number(albumID)].bgColor
      : "#8b1111"

  return (
    <div className="min-w-0 flex-1 m-2 pt-4 rounded-xl text-white overflow-auto lg:w-[62%] lg:m-0" 
        style={{ background: `linear-gradient(to bottom, ${bgclr}, #2b0b0b, #121212)` }}>

      <Routes>
        <Route path="/" element={<DisplayHome /> }></Route>
        <Route path="/album/:id" element={<DisplayAblum /> }></Route>
      </Routes>
    </div>
  )
}

export default Display