import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display'
import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react';

const Home = () => {
  const {audioRef, track} = useContext(PlayerContext);

  return (
      <div className="h-screen overflow-hidden bg-black flex flex-col">
      <div className="flex flex-1 min-h-0 p-2 gap-2">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default Home