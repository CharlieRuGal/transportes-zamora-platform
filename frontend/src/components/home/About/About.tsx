import { motion } from 'framer-motion'
import aboutImage from '../../../assets/images/about/about-main.jpg'
import styles from './About.module.css'

const benefits = [
  'Seguridad',
  'Puntualidad',
  'Conductores profesionales',
  'Atención personalizada',
]

function About() {
  return (
    <motion.section
      className={styles.section}
      id="nosotros"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            SOBRE NOSOTROS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58, delay: 0.08, ease: 'easeOut' }}
          >
            Comprometidos con cada viaje
          </motion.h2>

          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58, delay: 0.16, ease: 'easeOut' }}
          >
            <p>
              En Transportes Zamora somos una empresa ubicada en Santa Cruz de
              Guanacaste, dedicada a ofrecer servicios de transporte terrestre
              de pasajeros con altos estándares de calidad, seguridad y
              profesionalismo.
            </p>
            <p>
              Nuestro compromiso es brindar una experiencia de viaje cómoda y
              confiable para turistas, empresas, instituciones educativas,
              familias y grupos organizados que requieren un servicio
              responsable y personalizado.
            </p>
            <p>
              Cada recorrido representa para nosotros una oportunidad de
              demostrar nuestro compromiso con la puntualidad, la atención al
              cliente y la excelencia en el servicio.
            </p>
          </motion.div>

          <div className={styles.benefits}>
            {benefits.map((benefit, index) => (
              <motion.div
                className={styles.benefit}
                key={benefit}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.22 + index * 0.08,
                  ease: 'easeOut',
                }}
              >
                <span className={styles.checkIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="m5 12 4.2 4.2L19 6.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                </span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            className={styles.button}
            href="#historia"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.52, ease: 'easeOut' }}
          >
            Conocer nuestra historia →
          </motion.a>
        </div>

        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
        >
          <div className={styles.imageFrame}>
            <img
              className={styles.image}
              src={aboutImage}
              alt="Servicio profesional de Transportes Zamora para pasajeros en Guanacaste"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
