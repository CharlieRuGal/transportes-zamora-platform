import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fleet } from '../../../data/fleet'
import styles from './Fleet.module.css'

function Fleet() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedUnit = fleet[selectedIndex]

  return (
    <motion.section
      className={styles.section}
      id="flota"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>NUESTRA FLOTA</span>
          <h2>Unidades cómodas, modernas y seguras</h2>
          <p>
            En Transportes Zamora contamos con una flota de unidades modernas,
            cómodas y en excelentes condiciones, preparadas para brindar un
            servicio de transporte seguro y confiable en cualquier destino de
            Costa Rica.
          </p>
          <p>
            Disponemos de vehículos con capacidades desde 15 hasta 30 pasajeros,
            lo que nos permite adaptarnos a las necesidades de cada cliente, ya
            sea para traslados privados, transporte ejecutivo, excursiones,
            eventos especiales o grupos organizados.
          </p>
        </div>

        <div className={styles.showcase}>
          <div className={styles.mediaColumn}>
            <AnimatePresence mode="wait">
              <motion.div
                className={styles.imageFrame}
                key={selectedUnit.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
              >
                <img src={selectedUnit.image} alt={selectedUnit.name} />
              </motion.div>
            </AnimatePresence>

            <div className={styles.thumbnails} aria-label="Seleccionar unidad">
              {fleet.map((unit, index) => (
                <button
                  className={`${styles.thumbnail} ${
                    selectedIndex === index ? styles.activeThumbnail : ''
                  }`}
                  key={unit.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Ver ${unit.name}`}
                  aria-pressed={selectedIndex === index}
                >
                  <img src={unit.image} alt="" />
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              className={styles.details}
              key={selectedUnit.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.38, ease: 'easeOut' }}
            >
              <span className={styles.capacity}>{selectedUnit.capacity}</span>
              <h3>{selectedUnit.name}</h3>
              <p>{selectedUnit.description}</p>

              <div>
                <h4>Ideal para</h4>
                <div className={styles.chips}>
                  {selectedUnit.idealFor.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <a className={styles.button} href="#contacto">
                Cotizar esta unidad
              </a>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}

export default Fleet
