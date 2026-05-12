"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

const posts = [
  {
    tag: 'Mercado',
    title: 'O que é um passaporte digital veicular e por que o Brasil precisa dele',
    excerpt: 'A tokenização do histórico veicular está redefinindo como ativos automotivos são avaliados, financiados e transferidos no Brasil.',
    meta: '5 min de leitura',
    date: 'Maio 2025',
    accent: 'var(--purple)',
    index: '01',
  },
  {
    tag: 'Regulação',
    title: 'Fraude em odômetro: como o histórico imutável protege compradores',
    excerpt: 'Estimativas apontam que 30% dos veículos seminovos no Brasil têm hodômetro adulterado. A rastreabilidade blockchain elimina essa vulnerabilidade.',
    meta: '7 min de leitura',
    date: 'Abril 2025',
    accent: '#3B82F6',
    index: '02',
  },
  {
    tag: 'ESG',
    title: 'Por que montadoras europeias já exigem passaporte digital',
    excerpt: 'A diretiva europeia de baterias e o regulamento de acesso a dados veiculares criam pressão regulatória que chegará ao Brasil em 2026.',
    meta: '6 min de leitura',
    date: 'Março 2025',
    accent: '#10B981',
    index: '03',
  },
  {
    tag: 'Finanças',
    title: 'Tokenização de garantias veiculares: como funciona na prática para bancos',
    excerpt: 'Contratos inteligentes e garantias tokenizadas aceleram aprovações de crédito e reduzem custos operacionais para toda a cadeia financeira automotiva.',
    meta: '4 min de leitura',
    date: 'Fevereiro 2025',
    accent: '#F59E0B',
    index: '04',
  },
  {
    tag: 'Tecnologia',
    title: 'Arquitetura de dados imutáveis: como a Vetrii garante integridade histórica',
    excerpt: 'Uma análise técnica da camada de registro distribuído que sustenta o passaporte digital veicular — escalabilidade, latência e conformidade.',
    meta: '8 min de leitura',
    date: 'Janeiro 2025',
    accent: '#EF4444',
    index: '05',
  },
]

const ArrowLeft = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
)

const ArrowRight = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

export default function Blog() {
  return (
    <section className="blog-v2" id="blog">
      {/* Header */}
      <div className="wrap">
        <div className="blog-v2-head">
          <div className="blog-v2-head-left">
            <div className="overline" style={{ color: 'var(--purple-mu)' }}>Blog & Insights</div>
            <h2 className="sec-title dark">
              Inteligência que<br />
              <span>molda decisões.</span>
            </h2>
          </div>
          <div className="blog-v2-head-right">
            <p className="blog-v2-desc">
              Análises executivas sobre o mercado automotivo, regulação e o impacto dos dados na cadeia de valor.
            </p>
            <div className="blog-v2-nav-row">
              <div className="blog-v2-nav">
                <button className="blog-v2-btn blog-v2-prev" aria-label="Anterior">
                  <ArrowLeft />
                </button>
                <button className="blog-v2-btn blog-v2-next" aria-label="Próximo">
                  <ArrowRight />
                </button>
              </div>
              <a href="#" className="blog-v2-all">
                Ver todos os artigos <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Swiper */}
      <div className="blog-v2-swiper-wrap">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView="auto"
          spaceBetween={2}
          grabCursor
          navigation={{
            prevEl: '.blog-v2-prev',
            nextEl: '.blog-v2-next',
          }}
          a11y={{ enabled: true }}
          className="blog-v2-swiper"
        >
          {posts.map((post, i) => (
            <SwiperSlide key={i} className="blog-v2-slide">
              <a href="#" className="blog-v2-card">
                <div
                  className="blog-v2-card-bg"
                  style={{ '--accent': post.accent } as React.CSSProperties}
                />
                <div className="blog-v2-card-body">
                  <div className="blog-v2-card-top">
                    <span className="blog-v2-tag">{post.tag}</span>
                    <span className="blog-v2-index">{post.index}</span>
                  </div>
                  <div className="blog-v2-card-content">
                    <h3 className="blog-v2-title">{post.title}</h3>
                    <p className="blog-v2-excerpt">{post.excerpt}</p>
                  </div>
                  <div className="blog-v2-card-foot">
                    <span className="blog-v2-meta">{post.date} · {post.meta}</span>
                    <span className="blog-v2-arrow">
                      <ArrowRight />
                    </span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
