import { problemItems } from '@/lib/data'

export default function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="wrap">
        <div className="problem-header r">
          <div>
            <div className="overline" style={{ color: 'var(--purple-mu)' }}>O problema</div>
            <h2 className="sec-title">
              O mercado opera<br /><span>às cegas.</span>
            </h2>
          </div>
          <div>
            <p className="sec-sub">
              Dados fragmentados, históricos adulterados e processos manuais custam bilhões ao setor — e corroem a confiança de toda a cadeia automotiva.
            </p>
          </div>
        </div>
      </div>
      <div className="problem-grid r r1">
        {problemItems.map(item => (
          <div key={item.n} className="prob-item">
            <div className="prob-n">{item.n}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
