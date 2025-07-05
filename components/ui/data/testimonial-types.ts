export interface RealTestimonial {
  id: string
  name: string
  email: string
  phone?: string
  serviceType: "antar-kota" | "dalam-kota" | "airport" | "pariwisata" | "perintis" | "eksekutif"
  route: string
  rating: number
  testimonial: string
  avatar?: string
  isVerified: boolean
  isApproved: boolean
  createdAt: string
  updatedAt: string
}

export interface TestimonialFormData {
  name: string
  email: string
  phone?: string
  serviceType: string
  route: string
  rating: number
  testimonial: string
}
