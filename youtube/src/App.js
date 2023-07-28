import { useState } from 'react';
import './App.css';
import PlayButton from './components/PlayButton';
import SampleVideo from './components/SampleVideo';
import videosDb from './Data/data'
import AddButton from './components/AddButton';

function App() {

  const[videos,setVideos] = useState(videosDb)

  return (
    <>
     <div className="App">
      <AddButton></AddButton>
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
          <PlayButton>
            {video.title}
          </PlayButton>
        </SampleVideo>
      ))}
    </div>
    </>
  );
}

export default App;
