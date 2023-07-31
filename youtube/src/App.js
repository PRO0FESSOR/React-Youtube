import { useState } from "react";
import "./App.css";
import videosDb from "./Data/data";
import AddButton from "./components/AddButton";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDb);

  function addVideos(video) {
    setVideos([...videos,{...video , id:videos.length+1}]);
  }

  return (
    <>
      <div className="App">
        <AddButton addVideos={addVideos}></AddButton>
        <VideoList videos={videos}></VideoList>        
      </div>
    </>
  );
}

export default App;
