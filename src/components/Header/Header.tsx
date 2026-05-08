'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

type MenuId = 'sol' | 'res' | 'emp'

const MENU_LABELS: Record<MenuId, string> = {
  sol: 'Soluções',
  res: 'Recursos',
  emp: 'Empresa',
}

const SEGMENTS = [
  { label: 'Montadoras', desc: 'Emissão de passaportes digitais' },
  { label: 'Concessionárias', desc: 'Certificação de procedência' },
  { label: 'Bancos e financeiras', desc: 'Garantias verificáveis em blockchain' },
  { label: 'Seguradoras', desc: 'Precificação baseada em dados reais' },
  { label: 'Governo e DETRAN', desc: 'Integração regulatória oficial' },
  { label: 'Proprietários', desc: 'Histórico completo e portabilidade' },
]

const PRODUCTS = [
  {
    title: 'Passaporte Veicular Digital',
    desc: 'Registro imutável do ciclo de vida completo desde a fabricação até o descarte.',
    metric: '100%',
    metricLabel: 'auditável',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Rastreabilidade de Componentes',
    desc: 'Do primeiro parafuso ao descarte responsável — cadeia completa e visível.',
    metric: 'Zero',
    metricLabel: 'ponto cego',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Financiamento Inteligente',
    desc: 'Garantias verificáveis, scoring em tempo real e integração com DREX.',
    metric: 'DREX',
    metricLabel: 'ready',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15" />
      </svg>
    ),
  },
]

const STATS = [
  { value: 'R$ 2,1T', label: 'mercado endereçável' },
  { value: '12M', label: 'veículos/ano' },
  { value: '97%', label: 'redução de fraudes' },
]

const LEARN_ITEMS = [
  { title: 'Blog e artigos', desc: 'Insights do mercado automotivo e tecnologia' },
  { title: 'Webinars e eventos', desc: 'Ao vivo com especialistas do setor' },
  { title: 'Whitepapers', desc: 'Pesquisa técnica e regulatória aprofundada' },
  { title: 'Cases de sucesso', desc: 'Resultados reais de parceiros Vetrii' },
]

const DEV_ITEMS: { title: string; badge?: string; desc: string }[] = [
  { title: 'Documentação da API', badge: 'v2.1', desc: 'Referência completa REST e GraphQL' },
  { title: 'SDKs e bibliotecas', desc: 'Node.js, Python, Java e Go' },
  { title: 'Changelog', badge: 'Novo', desc: 'Últimas atualizações da plataforma' },
  { title: 'Status da plataforma', desc: 'Disponibilidade em tempo real' },
]

const COMPANY_LINKS = [
  { label: 'Sobre nós', href: '#sobre', desc: 'Missão, visão e história da Vetrii' },
  { label: 'Imprensa', href: '#', desc: 'Releases, cobertura e kit de mídia' },
  { label: 'Carreiras', href: '#', desc: 'Oportunidades para talentos excepcionais' },
  { label: 'Contato', href: '#contato', desc: 'Fale diretamente com o time executivo' },
]

const PARTNERS = [
  { abbr: 'PR', name: 'DETRAN', sub: 'Paraná — Piloto oficial' },
  { abbr: 'TP', name: 'TECPAR', sub: 'Instituto de Tecnologia do Paraná' },
]

function ArrowRight({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export default function Header() {
  const [barVisible, setBarVisible] = useState(true)
  const [activeMenu, setActiveMenu] = useState<MenuId | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const hdrRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (hdrRef.current && !hdrRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const toggle = (id: MenuId) => setActiveMenu(prev => (prev === id ? null : id))
  const close = () => setActiveMenu(null)

  return (
    <header
      className={`hdr${solid ? ' solid' : ''}${activeMenu ? ' menu-open' : ''}`}
      ref={hdrRef}
    >
      {barVisible && (
        <div className="hdr-bar">
          <span>Novo: Integração com DREX (Real Digital) disponível —</span>
          <a href="#contato">
            Saiba mais{' '}
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <button className="hdr-bar-close" aria-label="fechar" onClick={() => setBarVisible(false)}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="hdr-inner">
        <div className="hdr-main">
          <a href="#home" className="logo" onClick={close}>
            <Image src="/assets/images/vetrii_logo.png" alt="Vetr" width={200} height={50} />
          </a>

          <nav className="nav-items">
            {(['sol', 'res', 'emp'] as MenuId[]).map((id) => (
              <button
                key={id}
                className={`nav-link${activeMenu === id ? ' active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggle(id) }}
              >
                {MENU_LABELS[id]}
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
            <a href="#como-funciona" className="nav-link plain">Como funciona</a>
            <a href="#blog" className="nav-link plain">Blog</a>
          </nav>

          <div className="nav-actions">
            <a href="#" className="btn-login">Acessar plataforma</a>
            <a href="#contato" className="btn-demo">Agendar demo</a>
          </div>

          <button
            className={`mob-btn${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((p) => !p)}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mega: Soluções ── */}
        <div className={`mega mega-sol${activeMenu === 'sol' ? ' open' : ''}`}>
          <div className="mega-sol-sidebar">
            <div className="mega-section-label">Por segmento</div>
            {SEGMENTS.map((s, i) => (
              <a key={i} href="#solucoes" className="mega-seg-link" onClick={close}>
                <div className="mega-seg-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="mega-seg-label">{s.label}</div>
                  <div className="mega-seg-desc">{s.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mega-sol-main">
            <div className="mega-section-label">Plataforma</div>
            <div className="mega-products">
              {PRODUCTS.map((p, i) => (
                <a key={i} href="#solucoes" className="mega-product-card" onClick={close}>
                  <div className="mega-product-icon">{p.icon}</div>
                  <div className="mega-product-title">{p.title}</div>
                  <div className="mega-product-desc">{p.desc}</div>
                  <div className="mega-product-metric">
                    <span className="mega-metric-val">{p.metric}</span>
                    <span className="mega-metric-lbl">{p.metricLabel}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mega-sol-stats">
            <div className="mega-section-label">Impacto</div>
            {STATS.map((s, i) => (
              <div key={i} className="mega-stat">
                <div className="mega-stat-val">{s.value}</div>
                <div className="mega-stat-lbl">{s.label}</div>
              </div>
            ))}
            <a href="#contato" className="mega-cta" onClick={close}>
              Solicitar demonstração <ArrowRight />
            </a>
          </div>
        </div>

        {/* ── Mega: Recursos ── */}
        <div className={`mega mega-res${activeMenu === 'res' ? ' open' : ''}`}>
          <div className="mega-res-learn">
            <div className="mega-section-label">Aprenda</div>
            {LEARN_ITEMS.map((item, i) => (
              <a key={i} href="#blog" className="mega-res-item" onClick={close}>
                <div className="mega-res-item-body">
                  <div className="mega-res-item-title">{item.title}</div>
                  <div className="mega-res-item-desc">{item.desc}</div>
                </div>
                <ArrowRight size={10} />
              </a>
            ))}
          </div>

          <div className="mega-res-featured">
            <div className="mega-res-feat-tag">Em destaque</div>
            <div className="mega-res-feat-title">
              Blockchain Automotivo:<br />O futuro da rastreabilidade
            </div>
            <div className="mega-res-feat-desc">
              Como o registro imutável está redefinindo confiança no mercado veicular brasileiro.
            </div>
            <a href="#blog" className="mega-res-feat-link" onClick={close}>
              Ler artigo <ArrowRight />
            </a>
          </div>

          <div className="mega-res-dev">
            <div className="mega-section-label">Desenvolvedores</div>
            {DEV_ITEMS.map((item, i) => (
              <a key={i} href="#" className="mega-res-item" onClick={close}>
                <div className="mega-res-item-body">
                  <div className="mega-res-item-title">
                    {item.title}
                    {item.badge && <span className="mega-badge">{item.badge}</span>}
                  </div>
                  <div className="mega-res-item-desc">{item.desc}</div>
                </div>
                <ArrowRight size={10} />
              </a>
            ))}
            <div className="mega-res-status">
              <div className="mega-status-dot" />
              <span>Plataforma operacional — 99.97% uptime</span>
            </div>
          </div>
        </div>

        {/* ── Mega: Empresa ── */}
        <div className={`mega mega-emp${activeMenu === 'emp' ? ' open' : ''}`}>
          <div className="mega-emp-links">
            <div className="mega-section-label">Empresa</div>
            {COMPANY_LINKS.map((link, i) => (
              <a key={i} href={link.href} className="mega-emp-link" onClick={close}>
                <div>
                  <div className="mega-emp-link-label">{link.label}</div>
                  <div className="mega-emp-link-desc">{link.desc}</div>
                </div>
                <ArrowRight size={10} />
              </a>
            ))}
          </div>

          <div className="mega-emp-partners">
            <div className="mega-section-label">Parceiros institucionais</div>
            {PARTNERS.map((p, i) => (
              <div key={i} className="mega-partner-card">
                <div className="mega-partner-abbr">{p.abbr}</div>
                <div>
                  <div className="mega-partner-name">{p.name}</div>
                  <div className="mega-partner-sub">{p.sub}</div>
                </div>
                <div className="mega-partner-status">Ativo</div>
              </div>
            ))}
            <div className="mega-emp-compliance">
              {['LGPD', 'SENATRAN', 'DREX', 'ESG'].map(tag => (
                <div key={tag} className="mega-comp-tag">{tag}</div>
              ))}
            </div>
          </div>

          <div className="mega-emp-cta">
            <div className="mega-emp-cta-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className="mega-emp-cta-title">Seja um parceiro Vetrii</div>
            <div className="mega-emp-cta-desc">
              Conecte sua plataforma à infraestrutura de passaportes digitais veiculares.
            </div>
            <a href="#contato" className="mega-cta" onClick={close}>
              Falar com a equipe <ArrowRight />
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className={`mob-panel${mobileOpen ? ' open' : ''}`}>
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#solucoes" onClick={() => setMobileOpen(false)}>Soluções</a>
          <a href="#como-funciona" onClick={() => setMobileOpen(false)}>Como funciona</a>
          <a href="#sobre" onClick={() => setMobileOpen(false)}>Empresa</a>
          <a href="#blog" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href="#" onClick={() => setMobileOpen(false)}>Documentação</a>
          <a href="#contato" className="mob-demo" onClick={() => setMobileOpen(false)}>Agendar demonstração</a>
        </div>
      </div>
    </header>
  )
}
