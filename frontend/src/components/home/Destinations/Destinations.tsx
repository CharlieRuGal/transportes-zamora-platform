import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { destinationSection, destinations } from '../../../data/destinations'
import styles from './Destinations.module.css'

function Destinations() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedDestination = destinations[selectedIndex]

  return (
    <motion.section
      className={styles.section}
      id="destinos"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{destinationSection.label}</span>
          <h2>{destinationSection.title}</h2>
          {destinationSection.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.viewer}>
          <div className={styles.cards} aria-label="Seleccionar destino">
            {destinations.map((destination, index) => (
              <button
                className={`${styles.card} ${
                  selectedIndex === index ? styles.activeCard : ''
                }`}
                key={destination.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Ver ${destination.name}`}
                aria-pressed={selectedIndex === index}
              >
                <img
                  src={destination.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span>{destination.name}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              className={styles.featured}
              key={selectedDestination.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <div className={styles.imageFrame}>
                <img
                  src={selectedDestination.image}
                  alt={`Vista de ${selectedDestination.name}, destino turístico en Guanacaste`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className={styles.info}>
                <span className={styles.category}>
                  {selectedDestination.category}
                </span>
                <h3>{selectedDestination.name}</h3>
                <p>{selectedDestination.description}</p>

                <div className={styles.chips}>
                  {selectedDestination.activities.map((activity) => (
                    <span key={activity}>{activity}</span>
                  ))}
                </div>

                <a className={styles.button} href="#contacto">
                  Planificar mi viaje →
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}

export default Destinations
