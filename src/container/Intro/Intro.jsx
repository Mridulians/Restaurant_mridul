import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css';
import { meal } from '../../constants'
const Intro = () => {

  const [play, setPlay] = useState(false)
  const VidRef = React.useRef();


  const hanldeClick = () => {
    setPlay((prevPlayVideo) => !prevPlayVideo)

    if (play) {
      VidRef.current.pause();
    }
    else {
      VidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={VidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={hanldeClick}>

          {play ? (<BsPauseFill color='#fff' fontSize={30} />) : <BsFillPlayFill color='#fff' fontSize={30} />}

        </div>
      </div>

    </div>
  )
}

export default Intro;
