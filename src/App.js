import { useState } from 'react';
import './Tamagosan.css';


const members = [
    {
      initials: 'June',
      name: 'Lucille',
      role: 'Voix',
      bio: 'Lucille, aka June, aka la cloche. Elle possède une technique vocale à faire perdre son rômaji à un japonais. Elle est surtout connue pour son imitation de Pikachu et souhaite avec ce groupe explorer d\'autres répertoires.',
      instruments: ['Chant', 'Chant harmonique'],
      links: { instagram: '#', spotify: '#' },
    },
  {
    initials: 'Etan',
    name: 'Etan Sanzache',
    role: 'Batteur',
    bio: 'HPI, TDAH et SDF, l\'initiateur du projet et leader du groupe a beaucoup d achronymes qui peuvent lui être étiquetés. Musicien de grand talent, batteur et trompettiste, il a grandi dans une famille de musiciens a Bondi. Ce Kylian Mbappé de la batterie a su monter ce groupe qui n est pour lui qu\'une opportunité professionnelle et un moyen de subsistance: "faire raquer tous les weebs de Paris"',
    instruments: ['Batterie', 'Chant harmonique'],
    links: { instagram: '#', bandcamp: '#' },
  },
  {
    initials: 'Guiese',
    name: 'Guiseppe Valentine',
    role: 'Guitariste',
    bio: 'Viré du groupe car il magnétisait trodp le public féminin. ',
    instruments: ['Guitare'],
    links: { instagram: '#', spotify: '#' },
  },
  {
    initials: 'Carole',
    name: 'Carole',
    role: 'Guitariste',
    bio: 'Il fallait bien la meilleure guitariste de Zikapanam pour ce groupe. Elle remplace le belâtre italien qui nous faisait trop d ombre et ne comprenait jamais rien.',
    instruments: ['Guitare'],
    links: { instagram: '#', spotify: '#' },
  },
   {
    initials: 'Jordan',
    name: 'Jordan',
    role: 'Basse',
    bio: 'Rien ne prédéstinait ce chien de la casse à devenir le bassiste respecté qu il est aujourd hui. Autodidacte, il a appris la musique sur sa playstation. Son oreille affutée fait de lui le principal arrangeur du groupe.',
    instruments: ['Basse', 'Chant harmonique'],
    links: { instagram: '#', spotify: '#' },
  },
  {
    initials: 'Jérôme',
    name: 'Jérôme Trinh',
    role: 'Claviers',
    bio: "Jérôme est le cerveau du groupe. Il est capable de jouer 3 sons simultanément tout en calculant le PIB de la France.",
    instruments: ['Synthétiseur', 'Claviers'],
    links: { instagram: '#', spotify: '#'  },
  },
  {
    initials: 'Vincent',
    name: 'Vincent Prost',
    role: 'Claviers',
    bio: 'De formation classique, il aime pourtant taper sur son clavier comme un sourd en se prenant pour Little Richard. Probablement le seul adulte du groupe.',
    instruments: ['Claviers'],
    links: { instagram: '#', spotify: '#' },
  },
];

const videos = {
  concert: {
    title: 'Concert à la Dame de Canton — 30/05/2026',
    //youtubeId: 'K3Yvy8hlShU', 
    src: 'https://vincentprost.synology.me:3006/videos/tamago_dame_de_canton.mov',
    poster: '/assets/canton.jpg',
  },
  demo: {
    title: 'Démo — Stay with me',
    src: 'https://vincentprost.synology.me:3006/videos/video_light.mp4',
    poster: '/assets/group_light.jpg',
  },
  mashup: {
    title: 'Mashup',
    src: 'https://vincentprost.synology.me:3006/videos/FadeOut - VHS 1 light.mov',
    poster: '/assets/group_light.jpg'
  }
};

const tracks = [
  { title: 'Fly-Day Chinatown'},
  { title: '街のドルフィン (Dolphin in Town)'},
  { title: 'Fantasy'},
  { title: '竹内まりや - Plastic Love'},
   {title: '真夜中のドア〜Stay With Me'},
  { title: 'Mizuiro no Ame'},
  { title: '黄昏のBAY CITY'},
  { title: 'Cat\'s Eye'},
  { title: 'Midnight Cruisin\''},
  { title: 'Ai yo kienaide'},
];


const footerLinks = [
  { label: 'Instagram', href: 'https://instagram.com/tamago_san_officiel' },
  //{ label: 'Spotify', href: '#' },
  //{ label: 'Bandcamp', href: '#' },
  //{ label: 'YouTube', href: '#' },
  { label: 'Contact', href: 'mailto:tamagosan.contact@gmail.com' }
];

const shows = [
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function MemberModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <div className="modal-avatar">{member.initials}</div>
          <div>
            <h2>{member.name}</h2>
            <span className="modal-role">{member.role}</span>
          </div>
        </div>
        <p className="modal-bio">{member.bio}</p>
        <div className="modal-section-label">Instruments</div>
        <div className="modal-instruments">
          {member.instruments.map((inst) => (
            <span className="instrument-tag" key={inst}>{inst}</span>
          ))}
        </div>
        <div className="modal-section-label">Liens</div>
        <div className="modal-links">
          {member.links.instagram && <a href={member.links.instagram}>Instagram</a>}
          {member.links.spotify && <a href={member.links.spotify}>Spotify</a>}
          {member.links.bandcamp && <a href={member.links.bandcamp}>Bandcamp</a>}
        </div>
      </div>
    </div>
  );
}

export default function Tamagosan() {
  const [activeMember, setActiveMember] = useState(null);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="tama-root">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Tamagosan !!</h1>
          <p className="hero-subtitle">卵さんのスーパーバンド</p>
          <nav className="nav-pills">
            <button className="pill" onClick={() => scrollTo('presentation')}>À propos</button>
            <button className="pill" onClick={() => scrollTo('videos')}>Discographie</button>
            <button className="pill" onClick={() => scrollTo('shows')}>Concerts</button>
          </nav>
        </div>
      </section>

      {/* Présentation */}
      <section id="presentation" className="section presentation">
        <div className="presentation-photo">
          {!imgError ? (
            <img
              src="/assets/group_light.jpg"
              alt="Tamagosan en studio"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="photo-placeholder">
              <span>📷</span>
              <small>Ajouter /assets/groupe.jpg</small>
            </div>
          )}
        </div>
        <div className="presentation-text">
          <p className="section-label">À propos</p>
          <p>
            Tamagosan est un groupe formé en 2025 à Paris.
            Leur musique fait renaître le city pop japonais des années 80 — cette scène née dans
            l'effervescence économique du Japon et mêlant pop, funk, jazz, boogie et soft rock.
          </p>
          <p>
            Ses membres sont des passionnés de cette musique qui fourmille d'influences diverses et de créativité.
           Ils proposent des reprises des classiques du genre comme Stay With Me, Fly-Day Chinatown ou Fantasy. 
          </p>
        </div>
      </section>

      {/* Members */}
      <section id="about" className="section">
        <p className="section-label">Le groupe</p>
        <div className="members-grid">
          {members.map((m) => (
            <button className="member-card" key={m.name} onClick={() => setActiveMember(m)}>
              <div className="avatar">{m.initials}</div>
              <h3>{m.name}</h3>
              <span className="role">{m.role}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Discography */}
      {/*<section id="disco" className="section">
        <p className="section-label">Discographie</p>
        <div className="discography">
          {albums.map((a) => (
            <div className="album" key={a.title}>
              <div className="album-cover">{a.emoji}</div>
              <div className="album-info">
                <h4>{a.title}</h4>
                <span>{a.info}</span>
              </div>
              <span className="album-year">{a.year}</span>
            </div>
          ))}
        </div>

        <p className="section-label" style={{ marginTop: '3rem' }}>Titres</p>
        <div className="track-list">
          {tracks.map((t, i) => (
            <div className="track" key={t.title}>
              <span className="track-num">{i + 1}</span>
              <span className="track-name">{t.title}</span>
              <span className="track-dur">{t.duration}</span>
            </div>
          ))}
        </div>
      </section>*/}

      {/* Vidéos */}
      <section id="videos" className="section">
        <p className="section-label">Vidéos</p>

        {/*<div className="video-block">
          <h4 className="video-title">{videos.concert.title}</h4>
          <div className="video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${videos.concert.youtubeId}`}
              title={videos.concert.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>*/}

        <div className="video-block">
          <h4 className="video-title">{videos.mashup.title}</h4>
          <div className="video-embed">
            <video
              controls
              preload="metadata"
              poster={videos.mashup.poster || undefined}
              src={videos.mashup.src}
            >
              Votre navigateur ne supporte pas la lecture de cette vidéo.
            </video>
          </div>
        </div>

        <div className="video-block">
          <h4 className="video-title">{videos.concert.title}</h4>
          <div className="video-embed">
            <video
              controls
              preload="metadata"
              poster={videos.concert.poster || undefined}
              src={videos.concert.src}
            >
              Votre navigateur ne supporte pas la lecture de cette vidéo.
            </video>
          </div>
        </div>

        <div className="video-block">
          <h4 className="video-title">{videos.demo.title}</h4>
          <div className="video-embed">
            <video
              controls
              preload="metadata"
              poster={videos.demo.poster || undefined}
              src={videos.demo.src}
            >
              Votre navigateur ne supporte pas la lecture de cette vidéo.
            </video>
          </div>
        </div>
      </section>
      
      {/* Shows */}
      <section id="shows" className="section">
        <p className="section-label">Prochains concerts</p>
        <div className="shows-list">
          {shows.map((s) => (
            <div className="show-card" key={s.venue}>
              <div className="show-date">
                <span className="day">{s.day}</span>
                <span className="month">{s.month}</span>
              </div>
              <div className="show-info">
                <h4>{s.venue}</h4>
                <p>{s.address}</p>
              </div>
              <button className="ticket-btn">Réserver</button>
            </div>
          ))}
        </div>
      </section>

      {/* Fiche technique */}
    <section className="section fiche-technique">
      <p className="section-label">Fiche technique</p>
      <a
        href="/documents/fiche_technique.pdf"
        download="fiche-technique-tamagosan.pdf"
        target="_blank"
        className="download-btn"
      >
        Télécharger la fiche technique
      </a>
    </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-logo">Tamagosan</span>
        <div className="footer-links">
          {footerLinks.map((l) => (
            <a
              href={l.href}
              key={l.label}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <p>© 2026 Tamagosan. Tous droits réservés.</p>
      </footer>

      

      {/* Modal */}
      <MemberModal member={activeMember} onClose={() => setActiveMember(null)} />
    </div>
  );
}
