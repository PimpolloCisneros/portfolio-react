import React from 'react';
import './Cover.css';
import coverVideo from "../Media/coverVideo.mp4"

 const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo}
        autoPlay loop muted />
        <h1>Protafolio Roberto Cisneros</h1>
        <p>programación | resolución | protafolio | creación</p>
    </div>
  )
}

export default Cover