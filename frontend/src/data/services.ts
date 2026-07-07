export interface Service {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'transporte-turistico',
    title: 'Transporte Turístico',
    description:
      'Recorridos hacia playas, hoteles, volcanes y destinos turísticos de Costa Rica.',
  },
  {
    id: 'transporte-empresarial',
    title: 'Transporte Empresarial',
    description:
      'Traslado de colaboradores, ejecutivos, reuniones y actividades corporativas.',
  },
  {
    id: 'transporte-instituciones',
    title: 'Transporte para Instituciones',
    description:
      'Servicios para centros educativos, universidades, organizaciones e instituciones.',
  },
  {
    id: 'eventos-especiales',
    title: 'Eventos Especiales',
    description:
      'Transporte para bodas, celebraciones, actividades deportivas, congresos y eventos privados.',
  },
  {
    id: 'transporte-privado',
    title: 'Transporte Privado',
    description:
      'Viajes personalizados para familias, grupos, eventos especiales y traslados privados.',
  },
  {
    id: 'traslados-aeropuerto',
    title: 'Traslados al Aeropuerto',
    description:
      'Servicio puntual y cómodo para llegadas y salidas desde aeropuertos, hoteles y destinos turísticos.',
  },
]
