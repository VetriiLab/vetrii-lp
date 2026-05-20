"use client";

const cards = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Rastreabilidade com transparência total",
    desc: "Histórico imutável e verificável de manutenções e propriedade. Qualquer parte da cadeia pode auditar o veículo em tempo real.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Valorização do veículo",
    desc: "Veículos com histórico comprovado têm maior valor de revenda. O passaporte digital elimina a desconfiança e aumenta o preço justo.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Financiamento Tokenizado",
    desc: "Contratos inteligentes de financiamento e garantias tokenizadas em blockchain aceleram aprovações e reduzem inadimplência em toda a cadeia.",
  },
]

export default function ImpactSection() {
  return (
    <section className="intel" id="inteligencia">
      <div className="intel-bg-grid" aria-hidden="true" />
      <div className="wrap">
        <div className="intel-layout">
          <div className="intel-left">
            <h2 className="sec-title">
              A primeira plataforma<br />
              <span>para todo o processo veicular.</span>
            </h2>
            <p className="sec-sub" style={{ marginTop: '28px', maxWidth: '520px' }}>
              A primeira plataforma pronta para hospedar todo o processo de troca de dados do veículo em um único sistema — da fabricação ao descarte.
            </p>
            <div style={{ marginTop: '48px' }}>
              <a href="#solucoes" className="btn-p">
                Explorar soluções
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
