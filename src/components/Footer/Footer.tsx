'use client'

import { useState } from 'react'
import { footerColumns } from '@/lib/data'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="wrap">
          <div className="footer-newsletter-layout">
            <div>
              <h4>Fique por dentro do mercado automotivo digital</h4>
              <p>Regulação, DREX, passaportes digitais e ESG — na sua caixa de entrada.</p>
            </div>
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit">Assinar</button>
            </form>
          </div>
        </div>
      </div>

      {/* Trust */}
      <div className="footer-trust">
        <div className="wrap">
          <div className="footer-trust-layout">
            <span className="footer-trust-label">Conformidade</span>
            <div className="footer-trust-badges">
              <div className="f-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                LGPD Compliant
              </div>
              <div className="f-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Blockchain Verified
              </div>
              <div className="f-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75" />
                </svg>
                DREX Ready
              </div>
              <div className="f-badge">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                ESG Aligned
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="footer-top">
        <div className="wrap">
          <div className="footer-top-layout">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="m">V</div>
                <span>vetrii</span>
              </div>
              <p>Passaporte Veicular Digital — rastreabilidade do chassi ao descarte, conectando toda a cadeia automotiva brasileira.</p>
              <div className="footer-brand-contact">
                <a href="mailto:info@vetrii.com">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@vetrii.com
                </a>
                <a href="#">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  São Paulo, Brasil
                </a>
              </div>
            </div>

            {footerColumns.map(col => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                <nav>
                  {col.links.map(link => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                      {link.badge && <span className="badge">{link.badge}</span>}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="wrap">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; 2026 Vetrii Tecnologia Ltda. Todos os direitos reservados.</span>
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">LGPD</a>
            <a href="#">Cookies</a>
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="X / Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
