import fleet1 from '../assets/images/fleet/fleet-01.png'
import fleet2 from '../assets/images/fleet/fleet-02.jpeg'
import fleet3 from '../assets/images/fleet/fleet-03.jpg'
import fleet4 from '../assets/images/fleet/fleet-04.jpg'
import fleet5 from '../assets/images/fleet/fleet-05.jpg'

export type FleetUnit = {
  id: string
  name: string
  capacity: string
  description: string
  idealFor: string[]
  image: string
}

export const fleet: FleetUnit[] = [
  {
    id: 'microbus-turistica',
    name: 'Microbús Turística',
    capacity: 'Hasta 28 pasajeros',
    description:
      'Nuestra microbús turística es ideal para excursiones, viajes de larga distancia y recorridos por los principales destinos de Costa Rica. Cuenta con un amplio espacio interior, cómodos asientos y excelente visibilidad, ofreciendo un viaje seguro y confortable para grupos que desean disfrutar de una experiencia agradable durante todo el recorrido.',
    idealFor: [
      'Excursiones turísticas',
      'Giras educativas',
      'Eventos empresariales',
      'Transporte de grupos',
      'Viajes de larga distancia',
    ],
    image: fleet1,
  },
  {
    id: 'microbus-ejecutiva',
    name: 'Microbús Ejecutiva',
    capacity: 'Hasta 15 pasajeros',
    description:
      'Esta moderna unidad ejecutiva está diseñada para brindar comodidad, elegancia y privacidad en cada traslado. Es perfecta para servicios ejecutivos, traslados al aeropuerto, hoteles, reuniones corporativas y recorridos turísticos personalizados.',
    idealFor: [
      'Transporte ejecutivo',
      'Traslados privados',
      'Aeropuerto',
      'Hoteles',
      'Turismo personalizado',
    ],
    image: fleet2,
  },
  {
    id: 'microbus-pasajeros',
    name: 'Microbús de Pasajeros',
    capacity: 'Hasta 18 pasajeros',
    description:
      'Una unidad versátil que ofrece un excelente equilibrio entre comodidad, seguridad y eficiencia para recorridos cortos y largos. Es una excelente opción para empresas, instituciones educativas, iglesias, asociaciones y grupos familiares que requieren un transporte confiable.',
    idealFor: [
      'Transporte institucional',
      'Empresas',
      'Actividades familiares',
      'Excursiones',
      'Eventos especiales',
    ],
    image: fleet3,
  },
  {
    id: 'bus-grupos',
    name: 'Bus para Grupos',
    capacity: 'Hasta 30 pasajeros',
    description:
      'Nuestra unidad de mayor capacidad está preparada para transportar grupos numerosos con altos estándares de comodidad y seguridad. Es ideal para congresos, convenciones, actividades deportivas, excursiones, eventos empresariales y cualquier actividad que requiera movilizar un grupo grande de personas.',
    idealFor: [
      'Congresos',
      'Eventos deportivos',
      'Empresas',
      'Turismo',
      'Transporte grupal',
    ],
    image: fleet4,
  },
  {
    id: 'van-ejecutiva',
    name: 'Van Ejecutiva',
    capacity: 'Hasta 15 pasajeros',
    description:
      'Esta van moderna es perfecta para grupos pequeños que buscan un transporte cómodo, seguro y personalizado. Su diseño permite un desplazamiento ágil y confortable, siendo una excelente opción para familias, ejecutivos y turistas que desean un servicio exclusivo.',
    idealFor: [
      'Familias',
      'Parejas',
      'Transporte VIP',
      'Ejecutivos',
      'Tours personalizados',
    ],
    image: fleet5,
  },
]
