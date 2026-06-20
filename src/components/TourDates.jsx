import concerts from "../data/concerts";

export default function TourDates() {
  return (
    <section id="tour">
      <h2>Prochains Concerts</h2>

      <ul>
        {concerts.map(show => (
          <li key={show.id}>
            <strong>{show.date}</strong> - {show.city}
            <span> ({show.venue})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}