import conchalImage from '../assets/images/destinations/destination-conchal.jpg'
import flamingoImage from '../assets/images/destinations/destination-flamingo.jpg'
import nosaraImage from '../assets/images/destinations/destination-nosara.jpg'
import samaraImage from '../assets/images/destinations/destination-samara.jpg'
import tamarindoImage from '../assets/images/destinations/destination-tamarindo.jpg'

export interface Destination {
  id: string
  name: string
  image: string
  description: string
  category: string
}

export const destinations: Destination[] = [
  {
    id: 'tamarindo',
    name: 'Tamarindo',
    image: tamarindoImage,
    description:
      'Uno de los destinos turísticos más visitados de Costa Rica, ideal para surf, descanso y turismo internacional.',
    category: 'Playa',
  },
  {
    id: 'flamingo',
    name: 'Flamingo',
    image: flamingoImage,
    description:
      'Reconocido por su marina, playas de arena blanca y actividades acuáticas.',
    category: 'Playa',
  },
  {
    id: 'conchal',
    name: 'Conchal',
    image: conchalImage,
    description:
      'Famosa por su arena compuesta de pequeñas conchas y aguas cristalinas.',
    category: 'Playa',
  },
  {
    id: 'nosara',
    name: 'Nosara',
    image: nosaraImage,
    description: 'Destino ideal para surf, yoga y turismo de naturaleza.',
    category: 'Playa',
  },
  {
    id: 'samara',
    name: 'Sámara',
    image: samaraImage,
    description:
      'Una de las playas más familiares y tranquilas de Guanacaste.',
    category: 'Playa',
  },
]
