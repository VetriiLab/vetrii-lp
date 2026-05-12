'use client'
import { howItWorksSteps } from '@/lib/data'

// ─── Data ─────────────────────────────────────────────────────────────────────

const LEFT_ENTITIES = [
  {
    id: 'restricoes',
    title: 'Restrições e bloqueios',
    bullets: ['Sinistros', 'Renajud', 'Débitos'],
    side: 'left' as const,
  },
  {
    id: 'pecas',
    title: 'Peças de reuso',
    bullets: [],
    side: 'left' as const,
    indent: true,
  },
  {
    id: 'diario',
    title: 'Diário do proprietário',
    bullets: ['Acessórios', 'Melhorias', 'Fotos', 'Manutenções fora rede'],
    side: 'left' as const,
  },
  {
    id: 'proprietario',
    title: 'Proprietário atual',
    bullets: ['Prop 1', 'Prop 2', 'Prop 3', 'Prop n'],
    side: 'left' as const,
    bold: true,
  },
]

interface RightItem { text: string; external?: string }
interface RightEntity { id: string; title: string; items: RightItem[] }

const RIGHT_ENTITIES: RightEntity[] = [
  {
    id: 'montadoras',
    title: 'Montadoras',
    items: [
      { text: 'Catálogo de Peças' },
      { text: 'Peças Seriadas' },
      { text: 'Especificações' },
      { text: 'Retulagem', external: 'Indústria de peças' },
      { text: 'Elétricos', external: 'Baterias Sustentabilidade' },
    ],
  },
  {
    id: 'locadoras',
    title: 'Locadoras',
    items: [{ text: 'Telemetria' }, { text: 'História' }],
  },
  {
    id: 'concessionarias',
    title: 'Concessionárias e redes oficina',
    items: [
      { text: 'Revisões' },
      { text: 'Manutenções' },
      { text: 'Vistorias', external: 'Cautelares · Avaliações' },
    ],
  },
  {
    id: 'seguradoras',
    title: 'Seguradoras',
    items: [{ text: 'Sinistras' }, { text: 'Apólice' }],
  },
  {
    id: 'bancos',
    title: 'Bancos',
    items: [{ text: 'Contratas' }, { text: 'Garantias' }],
  },
  {
    id: 'ecossistema',
    title: 'Ecossistema',
    items: [
      { text: 'Leilões' },
      { text: 'Peças Marcadas', external: 'DataDot' },
      { text: 'Lojas e Revendas' },
    ],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Dot({ purple }: { purple?: boolean }) {
  return <span className={purple ? 'bp-dot bp-dot--purple' : 'bp-dot'} />
}

function ArrowLine() {
  return (
    <span className="bp-arrow-line">
      <span className="bp-arrow-line__bar" />
      <span className="bp-arrow-line__head" />
    </span>
  )
}

function EntityBox({ title, bold }: { title: string; bold?: boolean }) {
  return (
    <div className="bp-ebox">
      <span style={{ fontWeight: bold ? 800 : 600 }}>{title}</span>
    </div>
  )
}

// Left side row: bullets | EntityBox | →
function LeftRow({
  title,
  bullets,
  bold,
  showBaixa,
}: {
  title: string
  bullets: string[]
  bold?: boolean
  showBaixa?: boolean
}) {
  return (
    <div className="bp-left-row">
      {bullets.length > 0 && (
        <ul className="bp-bullet-list bp-bullet-list--left">
          {bullets.map((b) => (
            <li key={b} className="bp-bullet-item bp-bullet-item--left">
              <span>{b}</span>
              <Dot purple />
            </li>
          ))}
        </ul>
      )}
      <div className="bp-left-row__box-wrap">
        {showBaixa && (
          <div className="bp-baixa-wrap">
            <EntityBox title="Baixa" />
            <span className="bp-baixa-line" />
          </div>
        )}
        <EntityBox title={title} bold={bold} />
      </div>
      <ArrowLine />
    </div>
  )
}

// Right side row: ← | EntityBox | bullets
function RightRow({ title, items }: { title: string; items: RightItem[] }) {
  return (
    <div className="bp-right-row">
      <ArrowLine />
      <EntityBox title={title} />
      <ul className="bp-bullet-list bp-bullet-list--right">
        {items.map((item) => (
          <li key={item.text} className="bp-bullet-item bp-bullet-item--right">
            <Dot purple />
            <span>{item.text}</span>
            {item.external && (
              <>
                <span className="bp-ext-line" />
                <span className="bp-ext-tag">{item.external}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function BigPicture() {
  return (
    <section className="bp-section" id="big-picture">
      <div className="wrap">
        {/* Header */}
        <div className="bp-header r">
          <div className="overline">Tecnologia Blockchain Aplicada a Veículos</div>
          <h2 className="sec-title dark">
            Da fabricação ao descarte.<br />Tudo registrado.
          </h2>
          <p className="bp-header__sub">
            O Passaporte Veicular Digital conecta toda a cadeia automotiva em um único registro imutável. Quatro etapas que transformam dados dispersos em um token digital único, verificável por qualquer parte.
          </p>
        </div>

        {/* 4 HORIZONTAL POINTS */}
        <div className="bp-steps r r1">
          {howItWorksSteps.map(step => (
            <div key={step.n} className="bp-step">
              <div className="bp-step-num">{step.n}</div>
              <div>
                <h3 className="bp-step-title">{step.title}</h3>
                <p className="bp-step-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Diagram */}
        <div className="bp-diagram r r1">

          {/* ── LEFT COLUMN ── */}
          <div className="bp-col bp-col--left">

            {/* Detran + Desmontagem */}
            <div className="bp-detran-row">
              <div className="bp-desmontagem">
                <span className="bp-ebox">Desmontagem</span>
                <ArrowLine />
              </div>
              <div className="bp-detran-node">
                <div className="bp-detran-circle">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="var(--purple)" strokeWidth="1.5" />
                    <path d="M12 10l12 6-12 6V10z" fill="var(--purple)" />
                  </svg>
                  <span>Detran</span>
                </div>
              </div>
              <ArrowLine />
            </div>

            {/* Restrições e bloqueios */}
            <LeftRow
              title="Restrições e bloqueios"
              bullets={['Sinistros', 'Renajud', 'Débitos']}
            />

            {/* Baixa + Peças de reuso */}
            <LeftRow
              title="Peças de reuso"
              bullets={[]}
              showBaixa
            />

            {/* Diário do proprietário */}
            <LeftRow
              title="Diário do proprietário"
              bullets={['Acessórios', 'Melhorias', 'Fotos', 'Manutenções fora rede']}
            />

            {/* Proprietário atual + Frotistas */}
            <div className="bp-proprietario-wrap">
              <LeftRow
                title="Proprietário atual"
                bullets={['Prop 1', 'Prop 2', 'Prop 3', 'Prop n']}
                bold
              />
              <div className="bp-frotistas">
                <EntityBox title="Frotistas" />
              </div>
            </div>
          </div>

          {/* ── CENTER COLUMN ── */}
          <div className="bp-col bp-col--center">
            <div className="bp-passport">
              <div className="bp-passport__title">Passaporte Veicular Digital</div>

              {/* Token único */}
              <div className="bp-token">
                <span>Token</span>
                <span>único</span>
              </div>

              {/* Inner metadados box */}
              <div className="bp-passport__inner">
                <div className="bp-metadados">Metadados</div>

                {/* Car visual */}
                <div className="bp-car-wrap">
                  <div className="bp-car-glow" />
                  <svg className="bp-car-svg" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Aura ellipse */}
                    <ellipse cx="100" cy="78" rx="88" ry="12" fill="var(--purple)" fillOpacity="0.18" />
                    {/* Body */}
                    <rect x="12" y="46" width="176" height="30" rx="8" stroke="var(--purple)" strokeWidth="2" fill="rgba(98,81,218,0.06)" />
                    {/* Cabin */}
                    <path d="M55 46 C60 22 140 22 148 46" stroke="var(--purple)" strokeWidth="2" fill="rgba(98,81,218,0.04)" />
                    {/* Windshields */}
                    <line x1="80" y1="46" x2="66" y2="28" stroke="var(--purple)" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="120" y1="46" x2="134" y2="28" stroke="var(--purple)" strokeWidth="1" strokeOpacity="0.5" />
                    {/* Wheels */}
                    <circle cx="50" cy="76" r="14" stroke="var(--purple)" strokeWidth="2" fill="white" />
                    <circle cx="50" cy="76" r="6" fill="var(--purple)" fillOpacity="0.3" />
                    <circle cx="150" cy="76" r="14" stroke="var(--purple)" strokeWidth="2" fill="white" />
                    <circle cx="150" cy="76" r="6" fill="var(--purple)" fillOpacity="0.3" />
                    {/* Headlight */}
                    <rect x="12" y="52" width="14" height="8" rx="2" fill="var(--purple)" fillOpacity="0.5" />
                    {/* Taillight */}
                    <rect x="174" y="52" width="14" height="8" rx="2" fill="var(--purple)" fillOpacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="bp-col bp-col--right">
            {RIGHT_ENTITIES.map((entity) => (
              <RightRow key={entity.id} title={entity.title} items={entity.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
