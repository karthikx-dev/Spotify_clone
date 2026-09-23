import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAblum from './DisplayAblum';
import { albumsData } from '../assets/assets';

function Display() {
  const displayref = useRef();
  const loc = useLocation();
  const isAblum = loc.pathname.includes("album");
  const albumID = isAblum ? loc.pathname.slice(-1) : "";
  const bgclr = isAblum && albumsData[Number(albumID)] ? albumsData[Number(albumID)].bgColor : "#121212";

  useEffect(() => {
    if (isAblum && bgclr) {
      displayref.current.style.background = `linear-gradient(${bgclr}, #121212)`;
    } else {
      displayref.current.style.background = `#121212`;
    }
  });

  return (
    <div ref={displayref} className='min-w-0 flex-1 pt-4 rounded-xl text-white overflow-auto lg:w-[62%] lg:ml-0 bg-[#121212] transition-colors duration-500'>
       <Routes>
          <Route path='/' element={<DisplayHome/> }></Route>
          <Route path='/album/:id' element={<DisplayAblum/>}></Route>
       </Routes>
    </div>
  )
}

export default Display;