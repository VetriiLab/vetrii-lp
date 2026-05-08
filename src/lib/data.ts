export interface StatItem {
  value: string
  label: string
}

export interface ProblemItem {
  n: string
  title: string
  body: string
}

export interface SolutionRow {
  name: string
  desc: string
}

export interface HowItWorksStep {
  n: string
  title: string
  body: string
}

export interface RegulationItem {
  badge: string
  title: string
  body: string
}

export interface TeamMember {
  initials: string
  name: string
  role: string
  desc: string
}

export interface BlogPost {
  tag: string
  title: string
  meta: string
  color?: string
  number?: string
}

export interface FooterLink {
  label: string
  href: string
  badge?: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export const stats: StatItem[] = [
  { value: '45M+', label: 'veículos ativos no Brasil' },
  { value: 'R$3,5B', label: 'perdas anuais com fraude' },
  { value: '70%', label: 'sem histórico confiável' },
  { value: '12 dias', label: 'média para transferência' },
]

export const problemItems: ProblemItem[] = [
  {
    n: '01',
    title: 'Fraude e adulteração',
    body: 'Quilometragem adulterada, histórico forjado e sinistros ocultados. O comprador paga o preço da desconfiança.',
  },
  {
    n: '02',
    title: 'Dados fragmentados',
    body: 'Montadora, concessionária, seguradora e DETRAN — cada um com seu sistema. Zero fonte única de verdade.',
  },
  {
    n: '03',
    title: 'Burocracia extrema',
    body: 'Transferência, vistoria e financiamento. Processos manuais que demoram dias e custam caro para todos.',
  },
]

export const solutionRows: SolutionRow[] = [
  {
    name: 'Concessionárias',
    desc: 'Seminovos com histórico verificável. Transparência que gera confiança e aumenta o ticket médio nas negociações.',
  },
  {
    name: 'Bancos e financeiras',
    desc: 'Financiamento mais rápido com garantias verificáveis. Integração nativa com DREX e contratos inteligentes.',
  },
  {
    name: 'Seguradoras',
    desc: 'Precificação de risco com dados reais. Histórico imutável que elimina fraudes em sinistros e reduz perdas operacionais.',
  },
  {
    name: 'Governo e proprietários',
    desc: 'Transferências digitais, desburocratização e passaporte do veículo que valoriza na revenda e reduz o custo do seguro.',
  },
]

export const howItWorksSteps: HowItWorksStep[] = [
  {
    n: '01',
    title: 'Registro digital',
    body: 'O veículo recebe um identificador digital único no momento da fabricação — seu passaporte na blockchain.',
  },
  {
    n: '02',
    title: 'Rastreabilidade contínua',
    body: 'Manutenções, trocas de peça e transferências de proprietário. Cada evento registrado de forma imutável.',
  },
  {
    n: '03',
    title: 'Verificação por qualquer parte',
    body: 'Compradores, bancos e seguradoras consultam o histórico completo sem intermediários e sem dúvidas.',
  },
  {
    n: '04',
    title: 'Circularidade e descarte',
    body: 'Remanufatura, reciclagem ou descarte responsável. O ciclo completo do veículo, documentado até o fim.',
  },
]

export const regulationItems: RegulationItem[] = [
  {
    badge: 'SNT',
    title: 'SENATRAN',
    body: 'Digitalização de transferências veiculares. O passaporte digital é o próximo passo.',
  },
  {
    badge: 'FEB',
    title: 'FEBRABAN',
    body: 'Pilotos do DREX em andamento. Garantias tokenizadas já no radar do setor.',
  },
  {
    badge: 'SDP',
    title: 'SINDIPEÇAS',
    body: 'Exigências ESG de montadoras globais impulsionam rastreabilidade de componentes.',
  },
  {
    badge: 'ESG',
    title: 'Agenda ESG global',
    body: 'Montadoras europeias já exigem passaporte digital. O Brasil está chegando lá.',
  },
]

export const teamMembers: TeamMember[] = [
  {
    initials: 'FF',
    name: 'Fabiano Falvo',
    role: 'CEO',
    desc: 'Engenheiro eletrônico, 25+ anos em sistemas digitais',
  },
  {
    initials: 'RG',
    name: 'Roberto Galvão',
    role: 'CFO',
    desc: '19 anos no setor automotivo e fintech',
  },
  {
    initials: 'TC',
    name: 'Tathiana Canan',
    role: 'COO',
    desc: 'Conselheira IBGC · Formação INSEAD',
  },
  {
    initials: 'AG',
    name: 'André Giroldo',
    role: 'CPO',
    desc: '15 anos em produto, web3 e blockchain',
  },
]

export const blogPosts: BlogPost[] = [
  {
    tag: 'Mercado',
    title: 'O que é um passaporte digital veicular e por que o Brasil precisa dele',
    meta: '5 min de leitura',
  },
  {
    tag: 'Regulação',
    title: 'Fraude em odômetro: como o histórico imutável protege compradores',
    meta: '7 min',
    color: 'var(--purple)',
    number: '02',
  },
  {
    tag: 'ESG',
    title: 'Por que montadoras europeias já exigem passaporte digital',
    meta: '6 min',
    color: 'var(--navy)',
    number: '03',
  },
  {
    tag: 'Finanças',
    title: 'DREX e o mercado automotivo: o que muda para bancos',
    meta: '4 min',
    color: 'var(--navy-70)',
    number: '04',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Soluções',
    links: [
      { label: 'Montadoras', href: '#' },
      { label: 'Concessionárias', href: '#' },
      { label: 'Bancos', href: '#' },
      { label: 'Seguradoras', href: '#' },
      { label: 'Governo', href: '#' },
      { label: 'Proprietários', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Documentação da API', href: '#', badge: 'v2.1' },
      { label: 'Changelog', href: '#', badge: 'Novo' },
      { label: 'SDKs', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Webinars', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '#sobre' },
      { label: 'Carreiras', href: '#' },
      { label: 'Imprensa', href: '#' },
      { label: 'Parcerias', href: '#' },
      { label: 'Contato', href: '#contato' },
      { label: 'Termos de uso', href: '#' },
      { label: 'Privacidade / LGPD', href: '#' },
    ],
  },
]
