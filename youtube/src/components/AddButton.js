import React, { useState } from "react";
import "./AddButton.css";

const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title:'',
  views:'',
}

export default function AddButton({addVideos}) {
  const [video, setVideo] = useState(initialState);

  function handelSubmit(e)
  {
    e.preventDefault();
    addVideos(video);
    console.log(video); 
    setVideo(initialState);
  }

  function handelChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handelChange}
          placeholder="Title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handelChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handelSubmit}>Add Button</button>
      </form>
    </>
  );
}
/* <div style={{color:'white'}} >
        
      </div> */
