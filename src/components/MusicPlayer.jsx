import songs from "../data/songs";

export default function MusicPlayer() {
  return (
    <section id="music">
      <h2>Nos Titres</h2>

      {songs.map(song => (
        <div key={song.id} className="song">
          <h3>{song.title}</h3>

          <audio controls>
            <source src={song.file} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </section>
  );
}