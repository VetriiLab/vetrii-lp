import { teamMembers } from '@/lib/data'

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  )
}

export default function Team() {
  return (
    <section className="team" id="sobre">
      <div className="wrap">
        <div className="team-head r">
          <div className="overline">Nosso Time</div>
          <h2 className="sec-title dark">Quem está construindo.</h2>
          <p className="sec-sub dark" style={{ maxWidth: '520px', marginTop: '12px' }}>
            80+ anos de experiência combinada em tecnologia, finanças e mercado automotivo. Liderança executiva com histórico comprovado em empresas globais.
          </p>
        </div>
        <div className="team-grid r r1">
          {teamMembers.map(member => (
            <div key={member.initials} className="team-m">
              <div className="team-photo-wrap">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo-img"
                  loading="lazy"
                />
              </div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <div className="team-desc">{member.desc}</div>
              <div className="team-social">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`} className="team-social-icon">
                    <LinkedInIcon />
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer" aria-label={`Email de ${member.name}`} className="team-social-icon">
                    <EnvelopeIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
