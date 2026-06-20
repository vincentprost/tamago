export default function Gallery() {
  const photos = [
    "/images/live1.jpg",
    "/images/live2.jpg",
    "/images/live3.jpg",
    "/images/live4.jpg",
  ];

  return (
    <section id="gallery">
      <h2>Galerie</h2>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`concert-${index}`}
          />
        ))}
      </div>
    </section>
  );
}