import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryImages, type GalleryImage } from '../../../data/gallery'
import styles from './Gallery.module.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    if (!selectedImage) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedImage])

  return (
    <section className={styles.section} id="galeria">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>GALERÍA</span>
          <h2>Conoce algunos de nuestros viajes</h2>
          <p>
            Cada fotografía refleja nuestro compromiso con la seguridad, la
            comodidad y las experiencias inolvidables que viven nuestros
            pasajeros en cada recorrido.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {galleryImages.map((item, index) => (
            <motion.article
              className={styles.card}
              key={item.id}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              onClick={() => setSelectedImage(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedImage(item)
                }
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className={styles.overlay}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                type="button"
                aria-label="Cerrar galería"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className={styles.modalContent}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
