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
  photo: string
  linkedin?: string
  email?: string
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
    title: 'À prova de fraudes',
    body: 'Eliminação de adulterações de quilometragem e histórico. O registro imutável em blockchain torna a fraude tecnicamente impossível.',
  },
  {
    n: '02',
    title: 'Agilidade dos processos',
    body: 'Transferência de propriedade e financiamento sem burocracia. Processos que levam dias tornam-se minutos com contratos inteligentes.',
  },
  {
    n: '03',
    title: 'Economia Circular',
    body: 'Reciclabilidade e revalorização do ativo. Acompanhamento ponta a ponta até o descarte, reuso, remanufatura ou reciclagem.',
  },
]

export const solutionRows: SolutionRow[] = [
  {
    name: 'Concessionárias',
    desc: 'Valorização dos seminovos, transparência nas negociações e fidelização com serviços de manutenção tokenizados.',
  },
  {
    name: 'Bancos e financeiras',
    desc: 'Contratos inteligentes de financiamentos e garantias verificáveis em blockchain para toda a cadeia de crédito veicular.',
  },
  {
    name: 'Seguradoras',
    desc: 'Avaliação e precificação precisa de riscos, além da redução de fraudes em sinistros.',
  },
  {
    name: 'Governo e reguladores',
    desc: 'Transferências, emissão e validação de documentos, reduzindo burocracias e otimizando o atendimento ao cidadão.',
  },
]

export const howItWorksSteps: HowItWorksStep[] = [
  {
    n: '01',
    title: 'Tokenização',
    body: 'Criação de um token digital único que representa o veículo em blockchain — seu passaporte imutável desde a fabricação.',
  },
  {
    n: '02',
    title: 'Registro de Manutenções',
    body: 'Oficinas e concessionárias registram os serviços realizados de forma imutável, criando um histórico verificável por qualquer parte.',
  },
  {
    n: '03',
    title: 'Verificação',
    body: 'Compradores e seguradoras verificam o histórico completo do veículo. Transparência total sem intermediários.',
  },
  {
    n: '04',
    title: 'Registro de Circularidade',
    body: 'Acompanhamento ponta a ponta até o descarte, reuso, remanufatura ou reciclagem. O ciclo completo documentado.',
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
    body: 'Garantias tokenizadas já no radar do setor financeiro. Contratos inteligentes reduzem fricção e inadimplência.',
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
    desc: 'Graduado em Engenharia Eletrônica, 25+ anos em desenvolvimento de sistemas digitais. Entusiasta e evangelista de inovação e transformação digital.',
    photo: '/assets/images/equipe/fabiano2.jpg',
    linkedin: 'https://www.linkedin.com/in/fabianofalvo/',
    email: 'fabiano.falvo@vetrii.com',
  },
  {
    initials: 'RG',
    name: 'Roberto Galvão',
    role: 'CFO - Financeiro',
    desc: 'Empreendedor com 25 anos nas áreas financeira, jurídica e administrativa em tecnologia, e 19 anos no segmento automotivo. Fundador de quatro empresas em mobilidade, SaaS e inovação.',
    photo: '/assets/images/equipe/roberto_2.jpg',
    email: 'roberto.galvao@vetrii.com',
  },
  {
    initials: 'TC',
    name: 'Tathiana Canan',
    role: 'COO - Operações',
    desc: 'Executiva C-Level com 25 anos em gestão e inovação, foco em ativos digitais. Conselheira IBGC e GoNew. Formação executiva em Estratégia de Disrupção Digital (INSEAD) e Global Business Services (Hackett Group).',
    photo: '/assets/images/equipe/tati_2.jpg',
    linkedin: 'https://www.linkedin.com/in/tathiana-canan-4b14221b/',
    email: 'tathiana.canan@vetrii.com',
  },
  {
    initials: 'AG',
    name: 'André Giroldo',
    role: 'CPO - Produto',
    desc: '15 anos em gestão de produto e estratégia, sólida experiência em web3, blockchain e inovação digital. Ex-ExxonMobil, ABInbev, Sympla, UL Solutions e Lumx.',
    photo: '/assets/images/equipe/Andre.jpg',
    linkedin: 'https://www.linkedin.com/in/andreqgiroldo/',
    email: 'andre.giroldo@vetrii.com',
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
    title: 'Tokenização de garantias veiculares: como funciona na prática',
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
      { label: 'Webinars', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '#sobre' },
      { label: 'Imprensa', href: '#' },
      { label: 'Parcerias', href: '#' },
      { label: 'Contato', href: '#contato' },
      { label: 'Termos de uso', href: '#' },
      { label: 'Privacidade / LGPD', href: '#' },
    ],
  },
]
