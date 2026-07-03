import { motion } from 'framer-motion'
import styles from './FeaturedServices.module.css'

const services = [
  {
    title: 'Transporte Turístico',
    description:
      'Recorridos hacia playas, hoteles, volcanes y destinos turísticos de Costa Rica.',
    icon: (
      <path d="M5 16h14M7 16v2m10-2v2M6 12h12M7 7h10a2 2 0 0 1 2 2v7H5V9a2 2 0 0 1 2-2Zm2 2h2m2 0h2" />
    ),
  },
  {
    title: 'Transporte Empresarial',
    description:
      'Traslado de colaboradores, ejecutivos, reuniones y actividades corporativas.',
    icon: (
      <path d="M7 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14M5 20h14M10 8h1m3 0h1m-5 4h1m3 0h1m-5 4h1m3 0h1" />
    ),
  },
  {
    title: 'Transporte Institucional',
    description:
      'Servicios para centros educativos, universidades, organizaciones e instituciones.',
    icon: (
      <path d="M4 10 12 5l8 5M6 10v8m4-8v8m4-8v8m4-8v8M4 20h16" />
    ),
  },
  {
    title: 'Transporte Privado',
    description:
      'Viajes personalizados para familias, grupos, eventos especiales y traslados privados.',
    icon: (
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a5 5 0 0 1 10 0m-2-1a5 5 0 0 1 10 0" />
    ),
  },
]

function FeaturedServices() {
  return (
    <motion.section
      className={styles.section}
      id="servicios"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Servicios destacados</span>
          <h2>¿Qué tipo de transporte necesita?</h2>
          <p>
            Ofrecemos soluciones de transporte turístico, empresarial,
            institucional y privado, adaptadas a cada viaje y necesidad.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.article
              className={styles.card}
              key={service.title}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
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
                  {service.icon}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default FeaturedServices
