import { regulationItems } from '@/lib/data'

export default function RegulationImpact() {
  return (
    <section className="reg-impact">
      <div className="reg-impact-bg"></div>
      <div className="reg-impact-overlay"></div>
      <div className="wrap" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <div className="reg-impact-content r">
          <div className="overline">Contexto regulatório</div>
          <h2>O mercado<br />já está pedindo.</h2>
          <div className="reg-items r r1">
            {regulationItems.map(item => (
              <div key={item.badge} className="reg-item">
                <div className="reg-badge">{item.badge}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="reg-ph-label">Placeholder → imagem: contexto regulatório / sede institucional</div>
    </section>
  )
}
