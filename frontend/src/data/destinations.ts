import conchalImage from '../assets/images/destinations/destination-conchal.jpg'
import flamingoImage from '../assets/images/destinations/destination-flamingo.jpg'
import nosaraImage from '../assets/images/destinations/destination-nosara.jpg'
import samaraImage from '../assets/images/destinations/destination-samara.jpg'
import tamarindoImage from '../assets/images/destinations/destination-tamarindo.jpg'

export interface Destination {
  id: string
  name: string
  image: string
  category: string
  description: string
  activities: string[]
}

export interface DestinationSection {
  label: string
  title: string
  description: string[]
}

export const destinationSection: DestinationSection = {
  label: 'DESTINOS',
  title: 'Descubre los mejores destinos de Guanacaste',
  description: [
    'En Transportes Zamora te llevamos a conocer algunos de los destinos más impresionantes de Costa Rica. Desde playas de arena blanca y aguas cristalinas hasta pueblos costeros llenos de encanto y naturaleza, ponemos a tu disposición un servicio de transporte seguro, cómodo y puntual para que disfrutes cada viaje al máximo.',
    'Ya sea que viajes con tu familia, amigos, empresa o grupo turístico, estamos listos para acompañarte en tu próxima aventura por Guanacaste y el resto del país.',
  ],
}

export const destinations: Destination[] = [
  {
    id: 'playa-conchal',
    name: 'Playa Conchal',
    image: conchalImage,
    category: 'Playa',
    description:
      'Reconocida como una de las playas más hermosas de Costa Rica, Playa Conchal cautiva con sus aguas cristalinas de color turquesa y su singular arena formada por millones de pequeñas conchas marinas. Es el destino ideal para disfrutar de un día de playa, practicar snorkel, nadar o simplemente relajarse mientras contempla uno de los paisajes más espectaculares del Pacífico Norte.',
    activities: [
      'Snorkel',
      'Natación',
      'Paseos por la playa',
      'Fotografía',
      'Relajación',
    ],
  },
  {
    id: 'playa-flamingo',
    name: 'Playa Flamingo',
    image: flamingoImage,
    category: 'Playa',
    description:
      'Playa Flamingo es uno de los destinos turísticos más exclusivos de Guanacaste, reconocido por su arena blanca, sus aguas tranquilas y su moderna marina internacional. Es el lugar perfecto para disfrutar de deportes acuáticos, paseos en catamarán, pesca deportiva o admirar impresionantes atardeceres frente al océano Pacífico.',
    activities: [
      'Paseos en catamarán',
      'Pesca deportiva',
      'Buceo y snorkel',
      'Observación de atardeceres',
      'Gastronomía frente al mar',
    ],
  },
  {
    id: 'playa-tamarindo',
    name: 'Playa Tamarindo',
    image: tamarindoImage,
    category: 'Playa',
    description:
      'Tamarindo es uno de los destinos más visitados de Costa Rica gracias a su ambiente vibrante, excelente oferta gastronómica y espectaculares puestas de sol. Es el lugar ideal para quienes buscan combinar aventura, naturaleza y entretenimiento, disfrutando de actividades como surf, paseos en kayak, vida nocturna y recorridos por los manglares.',
    activities: ['Surf', 'Kayak', 'Vida nocturna', 'Restaurantes', 'Atardeceres'],
  },
  {
    id: 'playa-samara',
    name: 'Playa Sámara',
    image: samaraImage,
    category: 'Playa',
    description:
      'Ubicada en la península de Nicoya, Playa Sámara ofrece un ambiente tranquilo y familiar, ideal para quienes desean disfrutar del mar en un entorno relajado. Sus aguas poco profundas y su extensa playa la convierten en un excelente destino para nadar, pasear a caballo, practicar paddle board o simplemente descansar rodeado de naturaleza.',
    activities: [
      'Paseos a caballo',
      'Paddle Board',
      'Natación',
      'Caminatas por la playa',
      'Observación de fauna',
    ],
  },
  {
    id: 'nosara',
    name: 'Nosara',
    image: nosaraImage,
    category: 'Naturaleza y playa',
    description:
      'Nosara es un destino reconocido internacionalmente por su estilo de vida relajado, sus playas naturales y su compromiso con la conservación del medio ambiente. Es un lugar perfecto para quienes buscan bienestar, surf, yoga y contacto con la naturaleza, rodeados de exuberantes paisajes tropicales y una atmósfera de tranquilidad.',
    activities: [
      'Surf',
      'Yoga',
      'Senderismo',
      'Observación de fauna',
      'Turismo ecológico',
    ],
  },
]
