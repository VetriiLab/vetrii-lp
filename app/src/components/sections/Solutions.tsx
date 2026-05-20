import Image from 'next/image'
import { solutionRows } from '@/lib/data'

const meta: Record<string, { kpi: string; kpiLabel: string; tag: string }> = {
  'Concessionárias': {
    kpi: '+18%',
    kpiLabel: 'ticket médio em seminovos',
    tag: 'Varejo automotivo',
  },
  'Bancos e financeiras': {
    kpi: '–60%',
    kpiLabel: 'tempo de aprovação de crédito',
    tag: 'Crédito',
  },
  'Seguradoras': {
    kpi: '–40%',
    kpiLabel: 'perdas com fraudes em sinistros',
    tag: 'Risco & Compliance',
  },
  'Governo e reguladores': {
    kpi: '100%',
    kpiLabel: 'transferências digitais, sem papel',
    tag: 'Desburocratização',
  },
}

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
  </svg>
)

export default function Solutions() {
  return (
    <section className="solutions" id="solucoes">
      {/* ── Header ── */}
      <div className="wrap">
        <div className="sol-head r">
          <div>
            <div className="overline">Soluções por segmento</div>
            <h2 className="sec-title dark">
              Cada decisor<br />encontra o que precisa.
            </h2>
          </div>
          <p className="sec-sub dark">
            Se você representa uma montadora, concessionária, banco, seguradora ou pertence ao ecossistema de veículos, a Vetrii tem valor específico para o seu negócio.
          </p>
        </div>
      </div>

      {/* ── Hero card (Montadoras) — full bleed ── */}
      <div className="r r1">
        <div className="sol-hero">
          <div className="sol-hero-text">
            <div className="overline">Destaque — Montadoras</div>
            <h3>Rastreabilidade, garantias tokenizadas e dados precisos.</h3>
            <p>
              Reduza custos operacionais e abra novas oportunidades com rastreabilidade do primeiro parafuso ao recall, em conformidade com as exigências ESG globais.
            </p>
            <a href="#contato" className="btn-p">
              Falar com especialista{' '}
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <div className="sol-hero-img">
            <Image
              src="/assets/images/montadora.png"
              alt="Linha de produção da montadora"
              fill
              style={{ objectFit: 'cover', opacity: 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* ── 4-item full-width list ── */}
      <div className="sol-list-full r r2">
        {solutionRows.map((row, i) => {
          const m = meta[row.name]
          return (
            <a key={row.name} href="#contato" className="sol-row-full">
              <div className="sol-row-full__index">{String(i + 1).padStart(2, '0')}</div>

              <div className="sol-row-full__body">
                {m && <span className="sol-row-full__tag">{m.tag}</span>}
                <div className="sol-row-full__name">{row.name}</div>
                <p className="sol-row-full__desc">{row.desc}</p>
              </div>

              {m && (
                <div className="sol-row-full__kpi">
                  <span className="sol-row-full__kpi-val">{m.kpi}</span>
                  <span className="sol-row-full__kpi-lbl">{m.kpiLabel}</span>
                </div>
              )}

              <div className="sol-row-full__arr">
                <ArrowIcon />
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
