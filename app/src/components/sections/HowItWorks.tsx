import { howItWorksSteps } from '@/lib/data'

export default function HowItWorks() {
  return (
    <section className="how" id="como-funciona">
      <div className="wrap">
        <div className="how-head r">
          <div>
            <div className="overline">Como funciona</div>
            <h2 className="sec-title dark">
              Da fabricação ao descarte.<br />Tudo registrado.
            </h2>
          </div>
          <p className="sec-sub dark">
            Quatro etapas que transformam dados dispersos em um registro único, verificável por qualquer parte da cadeia.
          </p>
        </div>

        <div className="how-layout r r1">
          <div className="how-steps">
            {howItWorksSteps.map(step => (
              <div key={step.n} className="how-step">
                <div className="how-num">{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="how-visual">
            <div className="how-visual-ph">Placeholder: diagrama / infográfico do processo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
