import React from 'react'
import './AddButton.css';

export default function AddButton() {
  return (
    <>
    <form>
        <input type="text" name="title" placeholder='Title'/>
        <input type="text" name="views" placeholder='views' />
        <button>Add Button</button>
        {/* <button onClick={()=>{setVideos(
          [...videos,
            { id:videos.length+1,
              title: 'Next JS tutorial',
              views: '1M',
              time: '1 month ago',
              channel: 'Coder Dost',
              verified: true            
          }]
        )}}>Add Videos</button> */}

    </form>
    </>
  )
}
/* <div style={{color:'white'}} >
        
      </div> */