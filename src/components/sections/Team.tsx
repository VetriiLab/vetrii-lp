import { teamMembers } from '@/lib/data'

export default function Team() {
  return (
    <section className="team" id="sobre">
      <div className="wrap">
        <div className="team-head r">
          <div className="overline">Empresa</div>
          <h2 className="sec-title dark">Quem está construindo.</h2>
          <p className="sec-sub dark" style={{ maxWidth: '520px', marginTop: '12px' }}>
            80+ anos de experiência combinada em tecnologia, finanças e mercado automotivo.
          </p>
        </div>
        <div className="team-grid r r1">
          {teamMembers.map(member => (
            <div key={member.initials} className="team-m">
              <div className="team-photo">{member.initials}</div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <div className="team-desc">{member.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
