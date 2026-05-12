import type { Metadata } from 'next'
import { Provider } from '@/components/Provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vetrii — Passaporte Veicular Digital',
  description: 'Passaporte Veicular Digital — rastreabilidade do chassi ao descarte.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
