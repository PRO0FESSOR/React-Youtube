import React from 'react'
import './SampleVideo.css';


export default function SampleVideo({title,id,channel="Coder Dost",views,time,verified,children,deleteVideos,editVideo}) {
  return (
    <>
    <div className='container'>
    <button className='close' onClick={()=>deleteVideos(id)}>X</button>  
    <div className="pic">
    <img src="https://picsum.photos/300/250" alt="Katherine Johnson" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel}{verified && '✅'}</div>
    <div className="views">
      {views} views <span>.</span> {time}
    </div>
    <div>
      {children}
    </div>
    </div>
    </>
  )
}
