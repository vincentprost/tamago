
import './App.css';

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
      <div className="overlay">
      <h1>Coming Soon</h1>
      </div>
</div>
  );

}

export default App;
