'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const PARTNERS = [
  { name: 'DETRAN', sub: 'Paraná', src: '/assets/images/logo_detran_250x71.png', w: 125, h: 36 },
  { name: 'TECPAR', sub: 'Instituto de Tecnologia do Paraná', src: '/assets/images/logo_tecpar_232x80.png', w: 116, h: 40 },
]

type TabId = 'overview' | 'history' | 'compliance'

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Visão Geral' },
  { id: 'history', label: 'Histórico' },
  { id: 'compliance', label: 'Conformidade' },
]

const HISTORY_EVENTS = [
  { date: 'jan/2026', desc: 'Revisão 30.000 km — Autorizada Toyota' },
  { date: 'out/2025', desc: 'Substituição de pneus — Homologado' },
  { date: 'mar/2025', desc: 'Transferência de propriedade — DETRAN-PR' },
  { date: 'ago/2024', desc: 'Recall preventivo — Executado' },
  { date: 'jan/2024', desc: 'Emplacamento — Registro inicial' },
]

const COMPLIANCE_ITEMS = [
  { ok: true, label: 'LGPD', detail: 'Dados protegidos e auditáveis' },
  { ok: true, label: 'SENATRAN', detail: 'Transferência digital homologada' },
  { ok: true, label: 'DETRAN-PR', detail: 'Integração ativa — Piloto oficial' },
  { ok: true, label: 'Blockchain', detail: 'Registro imutável verificável' },
]

export default function Hero() {
  const [showPassport, setShowPassport] = useState(false)
  const [tab, setTab] = useState<TabId>('overview')

  useEffect(() => {
    const checkWidth = () => setShowPassport(window.innerWidth >= 1024)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-lines"></div>
      <div className="wrap hero-content">
        <div className="hero-layout">
          <div>
            <div className="hero-eyebrow r v">
              <div className="hero-eyebrow-line"></div>
              <span>Passaporte Veicular Digital</span>
            </div>
            <h1 className="r v r1">
              Tokenização e rastreabilidade<br />
              <em>do veículo em blockchain.</em>
            </h1>
            <p className="hero-body r v r2">
              A Vetrii transforma veículos e seus componentes em ativos digitais rastreavéis, por meio de{' '}
              <strong>passaportes digitais inteligentes</strong> que armazenam todo o histórico do ativo — da fabricação ao fim de sua vida útil.
            </p>
            <div className="hero-actions r v r3">
              <a href="#contato" className="btn-p">
                Solicitar demonstração executiva{' '}
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#solucoes" className="btn-g">Soluções por segmento</a>
            </div>
            <div className="hero-trust r v r3">
              <span>Conformidade com</span>
              <div className="trust-pills">
                {['LGPD', 'SENATRAN', 'ESG'].map(pill => (
                  <div key={pill} className="trust-pill">{pill}</div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="passport r v r2"
            id="psp"
            style={{ display: showPassport ? 'block' : 'none' }}
          >
            <div className="psp">
              <div className="psp-head">
                <div className="psp-brand">
                  <div className="m">V</div>
                  <div>
                    <span className="t">Passaporte Digital</span>
                    <span className="s">#VTR-2026-0847A</span>
                  </div>
                </div>
                <div className="psp-status-wrap">
                  <div className="psp-status-dot"></div>
                  <div className="psp-status">Verificado</div>
                </div>
              </div>

              <div className="psp-vehicle">
                <div className="psp-vehicle-main">Toyota Corolla Cross XRE</div>
                <div className="psp-vehicle-sub">2024 · 28.430 km · Prata Lunar · Flex</div>
                <div className="psp-vehicle-vin">Chassi: 9BWZZZ377VT004251</div>
              </div>

              <div className="psp-tabs">
                {TABS.map(t => (
                  <button
                    key={t.id}
                    className={`psp-tab${tab === t.id ? ' active' : ''}`}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {tab === 'overview' && (
                <div className="psp-body">
                  <div className="psp-row">
                    <div className="psp-cell">
                      <div className="psp-lbl">Proprietário</div>
                      <div className="psp-val">2.º dono</div>
                      <div className="psp-sub">Desde mar/2025</div>
                    </div>
                    <div className="psp-cell">
                      <div className="psp-lbl">Valor estimado</div>
                      <div className="psp-val">R$ 178.500</div>
                      <div className="psp-sub psp-up">+3,2% vs. mercado</div>
                    </div>
                  </div>
                  <div className="psp-row">
                    <div className="psp-cell">
                      <div className="psp-lbl">Manutenções</div>
                      <div className="psp-val">4 registros</div>
                      <div className="psp-sub">Última: jan/2026</div>
                    </div>
                    <div className="psp-cell">
                      <div className="psp-lbl">Sinistros</div>
                      <div className="psp-val">Nenhum</div>
                      <div className="psp-sub psp-clean">Histórico limpo</div>
                    </div>
                  </div>
                  <div className="psp-row full">
                    <div className="psp-cell">
                      <div className="psp-lbl">Score de Confiança Vetrii</div>
                      <div className="psp-score-row">
                        <div className="psp-score-bar">
                          <div className="psp-score-fill" style={{ width: '94%' }}></div>
                        </div>
                        <div className="psp-score-val">94<span>/100</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="psp-row full">
                    <div className="psp-cell">
                      <div className="psp-lbl">Ciclo de vida</div>
                      <div className="psp-bar">
                        <span style={{ background: 'rgba(98,81,218,0.75)', flex: 3 }} title="Fabricação"></span>
                        <span style={{ background: 'rgba(98,81,218,0.45)', flex: 2 }} title="1.º dono"></span>
                        <span style={{ background: 'rgba(98,81,218,0.25)', flex: 2 }} title="2.º dono (atual)"></span>
                        <span style={{ background: 'rgba(255,255,255,0.04)', flex: 3 }} title="Disponível"></span>
                      </div>
                      <div className="psp-bar-labels">
                        <span>Fabricação</span>
                        <span>1.º dono</span>
                        <span>2.º dono</span>
                        <span>—</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tab === 'history' && (
                <div className="psp-body">
                  <div className="psp-timeline">
                    {HISTORY_EVENTS.map((ev, i) => (
                      <div key={i} className="psp-tl-item">
                        <div className="psp-tl-left">
                          <div className="psp-tl-dot"></div>
                          {i < HISTORY_EVENTS.length - 1 && <div className="psp-tl-line"></div>}
                        </div>
                        <div className="psp-tl-content">
                          <div className="psp-tl-date">{ev.date}</div>
                          <div className="psp-tl-desc">{ev.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === 'compliance' && (
                <div className="psp-body">
                  {COMPLIANCE_ITEMS.map((item, i) => (
                    <div key={i} className="psp-compliance-item">
                      <div className={`psp-compliance-icon${item.ok ? ' ok' : ' pending'}`}>
                        {item.ok ? (
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4m0 4h.01" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="psp-compliance-label">{item.label}</div>
                        <div className="psp-compliance-detail">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="psp-footer">
                <div className="psp-footer-badges">
                  <span>Blockchain</span>
                  <span>LGPD</span>
                  <span>DETRAN-PR</span>
                </div>
                <a href="#">
                  Ver relatório completo{' '}
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners marquee — pinned to bottom of hero */}
      <div className="hero-partners static">
        <div className="partners-label">Parceiros institucionais</div>
        <div className="partners-list">
          {PARTNERS.map((p, i) => (
            <div key={i} className="partner-item">
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
