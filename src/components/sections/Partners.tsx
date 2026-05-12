export default function Partners() {
  const partners = [
    { name: 'DETRAN', sub: 'Paraná', abbr: 'PR' },
    { name: 'TECPAR', sub: 'Instituto de Tecnologia do Paraná', abbr: 'TP' },
  ]

  const items = [...partners, ...partners, ...partners, ...partners]

  return (
    <div className="partners-bar static">
      <div className="partners-label">Parceiros institucionais</div>
      <div className="partners-list">
        {partners.map((p, i) => (
          <div key={i} className="partner-item">
            <div className="partner-mark">{p.abbr}</div>
            <div>
              <div className="partner-name">{p.name}</div>
              <div className="partner-sub">{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
