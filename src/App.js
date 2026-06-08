
import './App.css';
//<source src="https://vincentprost.synology.me:3006/videos/video_light.mp4" type="video/mp4" />

function App() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source src="https://vincentprost.synology.me:3006/videos/video_light.mp4" type="video/mp4" />  
      </video>
</div>
  );

}


export default App;
