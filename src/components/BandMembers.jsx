import members from "../data/members";

export default function BandMembers() {
  return (
    <section id="about">
      <h2>Le Groupe</h2>

      <div className="members-grid">
        {members.map(member => (
          <div key={member.id} className="card">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}