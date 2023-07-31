import React from 'react'
import PlayButton from "./PlayButton";
import SampleVideo from "./SampleVideo";

export default function VideoList({videos}) {
  return (
    <>
    {videos.map((video) => (
          <SampleVideo
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          >
            <PlayButton>{video.title}</PlayButton>
          </SampleVideo>
        ))}
    </>
  )
}
