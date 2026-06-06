
import './App.css';
import backgroundVideo from './video_light.mp4'; 

function App() {
  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        
        </video>
        <div className="overlay">
        <h1>SOON</h1>
      </div>
    </div>
  );

}


export default App;
