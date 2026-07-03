export interface Testimonial {
  name: string
  testimonial: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'María González',
    testimonial:
      'El servicio fue puntual, seguro y muy cómodo. Nos acompañaron durante todo el viaje con excelente atención.',
    rating: 5,
  },
  {
    name: 'Luis Fernández',
    testimonial:
      'Contratamos el transporte para una actividad empresarial y todo salió perfecto. Muy profesionales y responsables.',
    rating: 5,
  },
  {
    name: 'Andrea Ramírez',
    testimonial:
      'Una experiencia muy agradable para nuestro grupo familiar. La unidad estaba limpia, cómoda y el trato fue excelente.',
    rating: 5,
  },
]
