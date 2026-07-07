import { motion } from 'framer-motion'
import logo from '../../../assets/images/branding/logo-transportes-zamora.png'
import { company } from '../../../data/company'
import { navigationItems } from '../../../data/navigation'
import { services } from '../../../data/services'
import styles from './Footer.module.css'

const footerColumns = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: 'easeOut' as const,
    },
  }),
}

function Footer() {
  const featuredServices = services.slice(0, 5)

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.brandColumn}
            custom={0}
            variants={footerColumns}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              className={styles.logo}
              src={logo}
              alt="Logotipo de Transportes Zamora"
              loading="lazy"
              decoding="async"
            />
            <h2>{company.name}</h2>
            <p>
              Transporte seguro, cómodo y puntual para turistas, empresas,
              instituciones y grupos que desean recorrer Guanacaste y todo Costa
              Rica.
            </p>
            <a
              className={styles.whatsapp}
              href="https://wa.me/50683050563"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">☎</span>
              Escribir por WhatsApp
            </a>
          </motion.div>

          <motion.nav
            className={styles.column}
            custom={1}
            variants={footerColumns}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            aria-label="Navegación del footer"
          >
            <h3>Navegación</h3>
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </motion.nav>

          <motion.div
            className={styles.column}
            custom={2}
            variants={footerColumns}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Servicios</h3>
            {featuredServices.map((service) => (
              <a key={service.id} href="#servicios">
                {service.title}
              </a>
            ))}
          </motion.div>

          <motion.div
            className={styles.contactColumn}
            custom={3}
            variants={footerColumns}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Contacto</h3>
            <p>
              <span>Ubicación</span>
              {company.location}
            </p>
            <p>
              <span>Teléfono</span>
              <a href="tel:+50683050563">{company.phone}</a>
            </p>
            <p>
              <span>Horario</span>
              {company.schedule}
            </p>
          </motion.div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Transportes Zamora. Todos los derechos reservados.</p>
          <p className={styles.canonext}>Desarrollado por Canonext.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
