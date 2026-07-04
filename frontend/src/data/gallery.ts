import gallery01 from '../assets/images/gallery/gallery-01.jpg'
import gallery02 from '../assets/images/gallery/gallery-02.jpg'
import gallery03 from '../assets/images/gallery/gallery-03.jpg'
import gallery04 from '../assets/images/gallery/gallery-04.jpg'

export interface GalleryImage {
  id: number
  image: string
  title: string
  description: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: gallery01,
    title: 'Momentos inolvidables',
    description:
      'Cada viaje se convierte en una experiencia llena de diversión, seguridad y excelentes recuerdos.',
  },
  {
    id: 2,
    image: gallery02,
    title: 'Turismo en Guanacaste',
    description:
      'Recorremos algunos de los destinos más hermosos del país con comodidad y puntualidad.',
  },
  {
    id: 3,
    image: gallery03,
    title: 'Viajes en grupo',
    description:
      'Transportamos grupos de todas las edades para excursiones, eventos y actividades especiales.',
  },
  {
    id: 4,
    image: gallery04,
    title: 'Experiencias compartidas',
    description:
      'Nos enorgullece acompañar a nuestros clientes en cada aventura alrededor de Costa Rica.',
  },
]
