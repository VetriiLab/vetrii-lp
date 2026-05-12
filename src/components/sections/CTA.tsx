'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  segment: string
}

export default function CTA() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', segment: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="cta" id="contato">
      <div className="wrap r">
        <div className="cta-box">
          <div className="cta-layout">
            <div className="cta-l">
              <div className="overline" style={{ color: 'var(--purple-mu)' }}>Fale conosco</div>
              <h2>Seja pioneiro na revolução do seu negócio!</h2>
              <p>Entre em contato para solicitar uma demonstração personalizada da plataforma Vetrii.</p>
              <div className="cta-btns">
                <a href="mailto:info@vetrii.com" className="btn-p">
                  info@vetrii.com{' '}
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="https://vetrii.com" target="_blank" rel="noopener noreferrer" className="btn-g">vetrii.com</a>
              </div>
            </div>

            <div className="cta-r">
              <h3>Agendar demonstração</h3>
              <form onSubmit={handleSubmit}>
                <div className="fg">
                  <label className="fl" htmlFor="cta-name">Nome</label>
                  <input
                    id="cta-name"
                    type="text"
                    name="name"
                    className="fi"
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="cta-email">E-mail corporativo</label>
                  <input
                    id="cta-email"
                    type="email"
                    name="email"
                    className="fi"
                    placeholder="nome@empresa.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="fg">
                  <label className="fl" htmlFor="cta-segment">Segmento</label>
                  <select
                    id="cta-segment"
                    name="segment"
                    className="fi"
                    value={form.segment}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Selecione</option>
                    <option>Montadora</option>
                    <option>Concessionária</option>
                    <option>Banco / Financeira</option>
                    <option>Seguradora</option>
                    <option>Governo</option>
                    <option>Outro</option>
                  </select>
                </div>
                <button type="submit" className="fs">Solicitar demonstração</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
