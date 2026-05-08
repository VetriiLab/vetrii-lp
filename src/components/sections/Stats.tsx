import { stats } from '@/lib/data'

export default function Stats() {
  return (
    <>
      <hr />
      <section className="stats">
        <div className="wrap">
          <div className="stats-grid r v">
            {stats.map((stat, i) => (
              <div key={i} className="stat-cell">
                <div className="stat-n">
                  {stat.value === '45M+' ? (
                    <>45M<em>+</em></>
                  ) : stat.value === '70%' ? (
                    <>70<em>%</em></>
                  ) : stat.value === '12 dias' ? (
                    <>12<span style={{ fontSize: '20px', color: 'var(--g400)', fontWeight: 500 }}> dias</span></>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
