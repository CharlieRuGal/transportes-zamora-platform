import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ImpactStats.module.css'

const stats = [
  {
    value: 10,
    suffix: '+',
    label: 'Años de experiencia',
    icon: <path d="M12 6v6l4 2m5-2a9 9 0 1 1-3-6.7" />,
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Viajes realizados',
    icon: (
      <path d="M5 16h14M7 16v2m10-2v2M6 12h12M7 7h10a2 2 0 0 1 2 2v7H5V9a2 2 0 0 1 2-2Z" />
    ),
  },
  {
    value: 100,
    suffix: '%',
    label: 'Compromiso',
    icon: <path d="m20 7-9 10-5-5m14 0a8 8 0 1 1-2.34-5.66" />,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Reservaciones',
    icon: (
      <path d="M7 4v3m10-3v3M5 9h14M6 20h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2Zm5-7h4" />
    ),
  },
]

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) {
      return
    }

    let frameId = 0
    const startTime = performance.now()

    const updateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(target * easedProgress))

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount)
      }
    }

    frameId = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(frameId)
  }, [duration, start, target])

  return count
}

function StatCard({
  value,
  suffix,
  label,
  icon,
  index,
  shouldCount,
}: {
  value: number
  suffix: string
  label: string
  icon: ReactNode
  index: number
  shouldCount: boolean
}) {
  const count = useCountUp(value, shouldCount)

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className={styles.iconWrap} aria-hidden="true">
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </motion.article>
  )
}

function ImpactStats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.28 })

  return (
    <motion.section
      className={styles.section}
      id="experiencia"
      ref={sectionRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nuestra experiencia</span>
          <h2>Más de una década moviendo personas con seguridad.</h2>
          <p>
            Cada viaje representa nuestro compromiso con la puntualidad, la
            comodidad y la confianza de quienes viajan con Transportes Zamora.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              index={index}
              shouldCount={isInView}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ImpactStats
