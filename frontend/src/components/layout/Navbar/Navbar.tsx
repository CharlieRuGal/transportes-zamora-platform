import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from "../../../assets/images/branding/logo-transportes-zamora.png";
import styles from './Navbar.module.css'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Flota', href: '#flota' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolledRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 40

      if (nextIsScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextIsScrolled
        setIsScrolled(nextIsScrolled)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <motion.a
          className={styles.logoLink}
          href="#inicio"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onClick={closeMenu}
        >
          <img className={styles.logo} src={logo} alt="Transportes Zamora" />
        </motion.a>

        <motion.nav
          className={styles.desktopMenu}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          className={styles.desktopActions}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
        >
          <a className={styles.phone} href="tel:+50683050563">
            (+506) 8305-0563
          </a>
          <motion.a
            className={styles.cta}
            href="#contacto"
            whileTap={{ scale: 0.98 }}
          >
            Solicitar Cotización
          </motion.a>
        </motion.div>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className={styles.mobileCta} href="#contacto" onClick={closeMenu}>
              Solicitar Cotización
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
