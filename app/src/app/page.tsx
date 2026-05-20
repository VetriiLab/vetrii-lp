'use client'

import { useEffect } from 'react'
import Header from '@/components/Header/Header'
import Hero from '@/components/sections/Hero'
import { TransformingSection } from '@/components/sections/TransformingSection'
import Problem from '@/components/sections/Problem'
import ImpactSection from '@/components/sections/ImpactSection'
import Solutions from '@/components/sections/Solutions'

import Team from '@/components/sections/Team'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v')
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.r').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      {/* <Stats /> */}
      <TransformingSection />
      <Problem />
      <ImpactSection />
      <Solutions />

      <Team />
      <CTA />
      <Footer />
    </>
  )
}
