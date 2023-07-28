import './PlayButton.css';
import React from 'react'
import { useState } from 'react';

export default function PlayButton({children}) {

  const [playing,setPlaying] = useState(false);

  function handelClick(e)
  {
    e.stopPropagation()
    setPlaying(!playing)
  }

  return (
    <button onClick={handelClick}>{children} : {playing?'⏸️':'⏯️'} </button>
  )
}
