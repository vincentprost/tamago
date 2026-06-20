export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>THE SOUND WAVES</h3>
          <p>Rock alternatif • Paris</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>

          <a href="#about">Le Groupe</a>
          <a href="#music">Musique</a>
          <a href="#tour">Concerts</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Suivez-nous</h4>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} THE SOUND WAVES. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}