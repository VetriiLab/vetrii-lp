"use client";

const cards = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Visibilidade Holística",
    desc: "Monitoramento em tempo real do ciclo de vida completo do veículo, garantindo a verdade única dos dados.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Governança e Compliance",
    desc: "Mitigação automática de riscos com rastreabilidade imutável que previne fraudes e perdas.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Performance de Negócios",
    desc: "Otimização de processos financeiros e securitários com base em dados de alta precisão e liquidez.",
  },
]

export default function ImpactSection() {
  return (
    <section className="intel" id="inteligencia">
      <div className="intel-bg-grid" aria-hidden="true" />
      <div className="wrap">
        <div className="intel-layout">
          <div className="intel-left">
            <div className="overline">Inteligência Executiva</div>
            <h2 className="sec-title">
              Domine os dados.<br />
              <span>Antecipe o mercado.</span>
            </h2>
            <p className="sec-sub" style={{ marginTop: '28px', maxWidth: '520px' }}>
              Uma plataforma executiva projetada para C-Levels. Centralize a governança, elimine silos de informação e transforme o histórico veicular em inteligência acionável e auditável.
            </p>
            <div style={{ marginTop: '48px' }}>
              <a href="#solucoes" className="btn-p">
                Analisar soluções de dados
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="intel-cards">
            {cards.map((card, i) => (
              <div key={i} className="intel-card">
                <div className="intel-card-icon">{card.icon}</div>
                <div>
                  <div className="intel-card-title">{card.title}</div>
                  <p className="intel-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
