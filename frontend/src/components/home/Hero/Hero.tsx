import { motion } from 'framer-motion'
import heroImage from "../../../assets/images/hero/hero-zamora.png";
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.tagline}>Tu destino, nuestro compromiso.</span>

          <h1 className={styles.title}>
            Tu mejor opción en transporte de pasajeros en Guanacaste
          </h1>

          <p className={styles.description}>
            En Transportes Zamora ofrecemos servicios de transporte turístico,
            empresarial, institucional y privado con la seguridad, puntualidad y
            comodidad que usted merece.
          </p>

          <div className={styles.details}>
            <span>Santa Cruz, Guanacaste, Costa Rica</span>
            <span>(+506) 8305-0563</span>
          </div>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#contacto">
              Solicitar Cotización
            </a>
            <a className={styles.secondaryButton} href="#contacto">
              Contáctenos
            </a>
          </div>

          <div className={styles.indicators} aria-label="Indicadores de servicio">
            <span>Seguridad</span>
            <span>Puntualidad</span>
            <span>Comodidad</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="Microbús de Transportes Zamora para transporte turístico y privado en Guanacaste"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
