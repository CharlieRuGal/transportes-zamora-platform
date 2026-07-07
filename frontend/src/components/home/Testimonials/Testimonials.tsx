import { motion } from 'framer-motion'
import { testimonials } from '../../../data/testimonials'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section className={styles.section} id="testimonios">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>TESTIMONIOS</span>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>
            La confianza de nuestros clientes refleja nuestro compromiso con
            cada viaje.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <motion.article
              className={styles.card}
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <div className={styles.stars} aria-label={`${item.rating} estrellas`}>
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
              <p className={styles.comment}>“{item.testimonial}”</p>
              <div className={styles.client}>
                <span className={styles.avatar} aria-hidden="true">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.clientType}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
