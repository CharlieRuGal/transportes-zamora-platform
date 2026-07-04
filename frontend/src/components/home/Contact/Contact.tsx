import { useState } from 'react'
import { motion } from 'framer-motion'
import { company } from '../../../data/company'
import { services } from '../../../data/services'
import styles from './Contact.module.css'

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>CONTACTO</span>
          <h2>{company.contactTitle}</h2>
          <p>{company.contactText}</p>
        </motion.div>

        <div className={styles.layout}>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Nombre completo</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className={styles.fieldGrid}>
              <div className={styles.fieldGroup}>
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" required />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="service">Tipo de servicio</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  Seleccione un servicio
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows={5} required />
            </div>

            <button className={styles.primaryButton} type="submit">
              Solicitar cotización
            </button>

            {isSubmitted && (
              <motion.p
                className={styles.success}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                Gracias por contactarnos. Pronto nos comunicaremos contigo.
              </motion.p>
            )}
          </motion.form>

          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          >
            <span className={styles.infoLabel}>Información de contacto</span>
            <h3>{company.name}</h3>

            <div className={styles.infoList}>
              <p>
                <span>Ubicación</span>
                {company.location}
              </p>
              <p>
                <span>Teléfono</span>
                {company.phone}
              </p>
              <p>
                <span>Horario</span>
                {company.schedule}
              </p>
            </div>

            <a
              className={styles.secondaryButton}
              href="https://wa.me/50683050563"
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
