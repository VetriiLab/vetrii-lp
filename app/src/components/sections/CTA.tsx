'use client'

export default function CTA() {

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
              <div className="cta-email-box">
                <h3>Pronto para começar?</h3>
                <p>Nossa equipe está à disposição para apresentar como a Vetrii pode transformar a rastreabilidade do seu negócio.</p>
                <a href="mailto:info@vetrii.com" className="cta-email-link">
                  info@vetrii.com
                </a>
                <div className="cta-availability">
                  <div className="status-dot"></div>
                  <span>Resposta em até 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
