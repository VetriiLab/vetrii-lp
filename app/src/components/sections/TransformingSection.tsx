import Image from 'next/image'

export function TransformingSection() {
  return (
    <section className="transforming" id="setor-blockchain">
      <div className="wrap">
        <div className="transforming-head">
          <div className="overline">Plataforma Web3</div>
          <h2 className="sec-title dark">
            Transformando o <span>Setor Automotivo</span>{' '}
            em <span>Blockchain</span>
          </h2>
          <p className="sec-sub dark transforming-sub">
            Tokenização de veículos e componentes viabiliza coleta, registro e monitoramento seguro e imutável de dados técnicos, operacionais e ambientais — com integração nativa ao DREX.
          </p>
        </div>

        <div className="transforming-diagram">
          <Image
            src="/assets/images/info_v4.svg"
            alt="Infográfico Transformando o Setor Automotivo em Blockchain"
            width={960}
            height={620}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>
    </section>
  )
}
